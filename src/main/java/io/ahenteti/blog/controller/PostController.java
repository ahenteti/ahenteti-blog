package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.post.request.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.CreatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.response.PostsGroupsApiResponse;
import io.ahenteti.blog.model.api.post.response.PostApiResponse;
import io.ahenteti.blog.model.api.post.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.model.api.post.response.PostSummaryApiResponse;
import io.ahenteti.blog.model.core.IGroupByStrategy;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostsGroups;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.core.user.IUser;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.PostDao;
import io.ahenteti.blog.service.validator.PostValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static io.ahenteti.blog.exception.ResourceNotFoundException.throwPostNotFoundException;

@RestController
public class PostController {

    private PostDao postDao;
    private PostConverter postConverter;
    private PostValidator postValidator;

    @Autowired
    public PostController(PostDao postDao, PostConverter postConverter, PostValidator postValidator) {
        this.postDao = postDao;
        this.postConverter = postConverter;
        this.postValidator = postValidator;
    }

    @GetMapping("/api/post-group-by-strategies")
    public PostGroupByStrategiesApiResponse getPostGroupByStrategies() {
        List<IGroupByStrategy> strategies = postDao.getPostGroupByStrategies();
        return postConverter.toPostGroupByStrategiesApiResponse(strategies);
    }

    @GetMapping("/api/posts-groups")
    public PostsGroupsApiResponse getPostsGroups(@RequestParam(required = false, defaultValue = "category") String groupBy, @RequestParam List<String> groups) {
        GetPostsGroupsApiRequest request = postConverter.toGetPostsGroupsApiRequest(groups, groupBy);
        ValidGetPostsGroupsApiRequest validRequest = postValidator.validateGetPostsGroupsApiRequest(request);
        PostsGroups postsGroups = postDao.getPostsGroups(validRequest);
        return postConverter.toGetPostsGroupsApiResponse(postsGroups);
    }

    @GetMapping("/api/posts/{id}")
    public PostApiResponse getPostById(@PathVariable Long id) {
        Post post = postDao.getPostById(id).orElseThrow(throwPostNotFoundException(id));
        return postConverter.toPostApiResponse(post);
    }

    @Transactional
    @PostMapping("/secure-api/posts")
    @ResponseStatus(HttpStatus.CREATED)
    public PostSummaryApiResponse createPost(@ModelAttribute IUser user, @RequestBody CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest request = postConverter.toCreatePostApiRequestBody(user, requestBody);
        ValidCreatePostApiRequest validRequest = postValidator.validateCreatePostApiRequest(request);
        ReadyToCreatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.createPost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @Transactional
    @PutMapping("/secure-api/posts/{id}")
    public PostSummaryApiResponse updatePost(@ModelAttribute IUser user, @PathVariable Long id, @RequestBody UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest request = postConverter.toUpdatePostApiRequest(user, id, requestBody);
        ValidUpdatePostApiRequest validRequest = postValidator.validateUpdatePostApiRequest(request);
        ReadyToUpdatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.updatePost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @Transactional
    @DeleteMapping("/secure-api/posts/{id}")
    public void deletePost(@ModelAttribute IUser user, @PathVariable Long id) {
        DeletePostApiRequest request = postConverter.toDeletePostApiRequest(user, id);
        ValidDeletePostApiRequest validRequest = postValidator.validateDeletePostApiRequest(request);
        postDao.deletePost(validRequest);
    }

}

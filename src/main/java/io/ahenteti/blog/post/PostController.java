package io.ahenteti.blog.post;

import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.ValidGetPostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.response.PostApiResponse;
import io.ahenteti.blog.post.model.api.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.post.model.api.response.PostSummaryApiResponse;
import io.ahenteti.blog.post.model.api.response.PostsGroupsApiResponse;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.core.ReadyToCreatePost;
import io.ahenteti.blog.post.model.core.ReadyToUpdatePost;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.post.service.PostConverter;
import io.ahenteti.blog.post.service.PostDao;
import io.ahenteti.blog.post.service.PostValidator;
import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
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
        GetPostsGroupsApiRequest request = postConverter.toApiRequest(groups, groupBy);
        ValidGetPostsGroupsApiRequest validRequest = postValidator.validate(request);
        PostsGroups postsGroups = postDao.getPostsGroups(validRequest);
        return postConverter.toApiResponse(postsGroups);
    }

    @GetMapping("/api/posts/{id}")
    public PostApiResponse getPostById(@PathVariable Long id) {
        GetPostApiRequest request = postConverter.toApiRequest(id);
        ValidGetPostApiRequest validRequest = postValidator.validate(request);
        return postConverter.toPostApiResponse(validRequest.getPost());
    }

    @Transactional
    @PostMapping("/secure-api/posts")
    @ResponseStatus(HttpStatus.CREATED)
    public PostSummaryApiResponse createPost(@ModelAttribute IOAuth2User user, @RequestBody CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest request = postConverter.toCreatePostApiRequestBody(user, requestBody);
        ValidCreatePostApiRequest validRequest = postValidator.validateCreatePostApiRequest(request);
        ReadyToCreatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.createPost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @Transactional
    @PutMapping("/secure-api/posts/{id}")
    public PostSummaryApiResponse updatePost(@ModelAttribute IOAuth2User user, @PathVariable Long id, @RequestBody UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest request = postConverter.toUpdatePostApiRequest(user, id, requestBody);
        ValidUpdatePostApiRequest validRequest = postValidator.validateUpdatePostApiRequest(request);
        ReadyToUpdatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.updatePost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @Transactional
    @DeleteMapping("/secure-api/posts/{id}")
    public void deletePost(@ModelAttribute IOAuth2User user, @PathVariable Long id) {
        DeletePostApiRequest request = postConverter.toDeletePostApiRequest(user, id);
        ValidDeletePostApiRequest validRequest = postValidator.validateDeletePostApiRequest(request);
        postDao.deletePost(validRequest);
    }

}

package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.post.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.CreatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.PostApiResponse;
import io.ahenteti.blog.model.api.post.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.post.PostsSummariesApiResponse;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostsSummaries;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.core.user.IUser;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.PostDao;
import io.ahenteti.blog.service.validator.PostValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/api/posts-summaries")
    public PostsSummariesApiResponse getPostsSummaries() {
        PostsSummaries postsSummaries = postDao.getAllPostsSummaries();
        return postConverter.toPostsSummariesApiResponse(postsSummaries);
    }

    @GetMapping("/api/posts/{id}")
    public PostApiResponse getPostById(@PathVariable Long id) {
        Post post = postDao.getPostById(id).orElseThrow(throwPostNotFoundException(id));
        return postConverter.toPostApiResponse(post);
    }

    @PostMapping("/secure-api/posts")
    @ResponseStatus(HttpStatus.CREATED)
    public PostSummaryApiResponse createPost(@ModelAttribute IUser user, @RequestBody CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest request = postConverter.toCreatePostApiRequestBody(user, requestBody);
        ValidCreatePostApiRequest validRequest = postValidator.validateCreatePostApiRequest(request);
        ReadyToCreatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.createPost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @PutMapping("/secure-api/posts/{id}")
    public PostSummaryApiResponse updatePost(@ModelAttribute IUser user, @PathVariable Long id, @RequestBody UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest request = postConverter.toUpdatePostApiRequest(user, id, requestBody);
        ValidUpdatePostApiRequest validRequest = postValidator.validateUpdatePostApiRequest(request);
        ReadyToUpdatePost post = postConverter.toPost(validRequest);
        PostEntity entity = postDao.updatePost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

}

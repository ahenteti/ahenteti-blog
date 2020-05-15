package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.CreatePostApiRequest;
import io.ahenteti.blog.model.api.CreatePostApiRequestBody;
import io.ahenteti.blog.model.api.PostApiResponse;
import io.ahenteti.blog.model.api.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.PostsSummariesApiResponse;
import io.ahenteti.blog.model.api.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostsSummaries;
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
        postValidator.validateCreatePostApiRequest(request);
        Post post = postConverter.toPost(request);
        PostEntity entity = postDao.createOrUpdatePost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

    @PutMapping("/secure-api/posts/{id}")
    public PostSummaryApiResponse updatePost(@ModelAttribute IUser user, @PathVariable Long id, @RequestBody UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest request = postConverter.toUpdatePostApiRequest(user, id, requestBody);
        postValidator.validateUpdatePostApiRequest(request);
        Post post = postConverter.toPost(request);
        PostEntity entity = postDao.createOrUpdatePost(post);
        return postConverter.toPostSummaryApiResponse(entity);
    }

}

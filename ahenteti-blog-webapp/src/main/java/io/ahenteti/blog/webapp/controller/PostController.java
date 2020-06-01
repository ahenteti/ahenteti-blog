package io.ahenteti.blog.webapp.controller;

import io.ahenteti.blog.core.model.post.api.request.BulkCreateAndUpdatePostOperationsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.CreatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.core.model.post.api.request.DeletePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.DeleteUserPostsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetPostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.core.model.post.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidBulkCreateAndUpdatePostOperationsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidDeleteUserPostsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidGetPostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.response.PostApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostSummaryApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostsGroupsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.core.model.post.core.BulkCreateAndUpdatePostOperations;
import io.ahenteti.blog.core.model.post.core.Post;
import io.ahenteti.blog.core.model.post.core.PostToCreate;
import io.ahenteti.blog.core.model.post.core.PostToUpdate;
import io.ahenteti.blog.core.model.post.core.PostsGroups;
import io.ahenteti.blog.core.model.post.core.PostsPage;
import io.ahenteti.blog.core.model.post.core.ValidBulkCreateAndUpdatePostOperations;
import io.ahenteti.blog.core.model.post.core.ValidPostToCreate;
import io.ahenteti.blog.core.model.post.core.ValidPostToUpdate;
import io.ahenteti.blog.core.model.shared.core.IGroupByStrategy;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.post.PostConverter;
import io.ahenteti.blog.service.post.PostDao;
import io.ahenteti.blog.service.post.PostValidator;
import io.ahenteti.blog.service.user.UserValidator;
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
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class PostController {

    private PostDao postDao;
    private PostConverter postConverter;
    private PostValidator postValidator;
    private UserValidator userValidator;

    @Autowired
    public PostController(PostDao postDao, PostConverter postConverter, PostValidator postValidator, UserValidator userValidator) {
        this.postDao = postDao;
        this.postConverter = postConverter;
        this.postValidator = postValidator;
        this.userValidator = userValidator;
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
    public PostSummaryApiResponse create(@ModelAttribute IOAuth2User user, @RequestBody CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest request = postConverter.toApiRequest(user, requestBody);
        ValidCreatePostApiRequest validRequest = postValidator.validate(request);
        PostToCreate post = postConverter.toPostToCreate(validRequest);
        ValidPostToCreate validPost = postValidator.validate(post);
        Post newlyCreatedPost = postDao.create(validPost);
        return postConverter.toApiResponse(newlyCreatedPost);
    }

    @Transactional
    @PutMapping("/secure-api/posts/{id}")
    public PostSummaryApiResponse update(@ModelAttribute IOAuth2User user, @PathVariable Long id, @RequestBody UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest request = postConverter.toApiRequest(user, id, requestBody);
        ValidUpdatePostApiRequest validRequest = postValidator.validate(request);
        PostToUpdate post = postConverter.toPostToUpdate(validRequest);
        ValidPostToUpdate validPost = postValidator.validate(post);
        Post newlyUpdatedPost = postDao.update(validPost);
        return postConverter.toApiResponse(newlyUpdatedPost);
    }

    // @formatter:off
    @Transactional
    @PostMapping("/secure-api/posts/bulk_create_and_update_operations.json")
    public void bulkCreateAndUpdateOperations(
            @ModelAttribute IOAuth2User user,
            @RequestParam("file") MultipartFile file) {
        BulkCreateAndUpdatePostOperationsApiRequest request = postConverter.toApiRequest(user, file);
        ValidBulkCreateAndUpdatePostOperationsApiRequest validRequest = postValidator.validate(request);
        BulkCreateAndUpdatePostOperations bulkOperations = postConverter.toBulkOperations(validRequest);
        ValidBulkCreateAndUpdatePostOperations validBulkOperations = postValidator.validate(bulkOperations);
        postDao.createOrUpdate(validBulkOperations);
    }
    // @formatter:on

    // @formatter:off
    @GetMapping("/secure-api/user/posts-summaries-page")
    public UserPostsPageApiResponse getUserPostsPage(
            @ModelAttribute IOAuth2User user, 
            @RequestParam String filter,
            @RequestParam Integer page, 
            @RequestParam Integer size, 
            @RequestParam(required = false, defaultValue = "CREATED_AT") String sortBy, 
            @RequestParam(required = false, defaultValue = "desc") String sortDirection) {
        GetUserPostsPageApiRequest request = postConverter.toApiRequest(user, page, size, sortBy, sortDirection, filter);
        ValidGetUserPostsApiRequest validRequest = postValidator.validate(request);
        PostsPage postsPage = postDao.getUserPosts(validRequest);
        return postConverter.toApiResponse(postsPage);
    }
    // @formatter:on

    // @formatter:off
    @GetMapping("/secure-api/user/posts-summaries")
    public UserPostsApiResponse getAllUserPosts(@ModelAttribute IOAuth2User user) {
        userValidator.validateAuthenticatedUser(user);
        List<Post> userPosts = postDao.getAllUserPosts(user);
        return postConverter.toApiResponse(userPosts);
    }
    // @formatter:on

    @Transactional
    @DeleteMapping("/secure-api/posts/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@ModelAttribute IOAuth2User user, @PathVariable Long id) {
        DeletePostApiRequest request = postConverter.toApiRequest(user, id);
        ValidDeletePostApiRequest validRequest = postValidator.validate(request);
        postDao.delete(validRequest);
    }

    @Transactional
    @DeleteMapping("/secure-api/user/posts/all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAllUserPosts(@ModelAttribute IOAuth2User user) {
        DeleteUserPostsApiRequest request = postConverter.toApiRequest(user);
        ValidDeleteUserPostsApiRequest validRequest = postValidator.validate(request);
        postDao.delete(validRequest);
    }

}

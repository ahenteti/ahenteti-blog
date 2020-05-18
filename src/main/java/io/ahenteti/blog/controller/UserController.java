package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.post.request.GetUserPostsApiRequest;
import io.ahenteti.blog.model.api.post.response.UserPostsApiResponse;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.api.user.UserApiResponse;
import io.ahenteti.blog.model.core.post.PostsSummariesPage;
import io.ahenteti.blog.model.core.user.IUser;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.PostDao;
import io.ahenteti.blog.service.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserConverter userConverter;
    private UserValidator userValidator;
    private PostConverter postConverter;
    private PostDao postDao;

    @Autowired
    public UserController(UserConverter userConverter, UserValidator userValidator, PostConverter postConverter, PostDao postDao) {
        this.userConverter = userConverter;
        this.userValidator = userValidator;
        this.postConverter = postConverter;
        this.postDao = postDao;
    }

    @GetMapping("/api/currentIdentity")
    public UserApiResponse getUser(@ModelAttribute IUser user) {
        userValidator.validateUser(user);
        return userConverter.toUserApiResponse(user);
    }

    @GetMapping("/secure-api/user/posts-summaries")
    public UserPostsApiResponse getUserPosts(@ModelAttribute IUser user, @RequestParam Integer page, @RequestParam Integer size, @RequestParam(required = false, defaultValue = "createdAt") String sortBy) {
        GetUserPostsApiRequest request = postConverter.toGetUserPostsApiRequest(user, page, size, sortBy);
        ValidGetUserPostsApiRequest validRequest = userValidator.validateGetUserPostsApiRequest(request);
        PostsSummariesPage postsPage = postDao.getUserPosts(validRequest);
        return postConverter.toUserPostsApiResponse(postsPage);
    }

}

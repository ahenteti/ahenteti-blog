package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.GetUserPostsApiRequest;
import io.ahenteti.blog.model.api.PostsSummariesApiResponse;
import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.PostDao;
import io.ahenteti.blog.service.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static io.ahenteti.blog.security.SecurityConfiguration.SECURE_API_PREFIX;

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

    @GetMapping(SECURE_API_PREFIX + "user/{username}/posts-summaries")
    public PostsSummariesApiResponse getUserPostsSummaries(@ModelAttribute IUser user, @RequestParam String username, @RequestParam Integer page, @RequestParam Integer size) {
        GetUserPostsApiRequest request = postConverter.toGetUserPostsApiRequest(user, username, page, size);
        userValidator.validateGetUserPostsApiRequest(request);
        PostsSummaries posts = postDao.getPostsSummaries(request);
        return postConverter.toPostsSummariesApiResponse(posts);
    }

}

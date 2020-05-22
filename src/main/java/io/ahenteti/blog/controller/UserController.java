package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.post.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.model.api.post.response.UserPostsPageApiResponse;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.api.user.CurrentUserApiResponse;
import io.ahenteti.blog.model.api.user.GetUsersPageApiRequest;
import io.ahenteti.blog.model.api.user.UsersPageApiResponse;
import io.ahenteti.blog.model.api.user.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.model.core.post.PostsPage;
import io.ahenteti.blog.model.core.user.UsersPage;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.PostDao;
import io.ahenteti.blog.service.dao.UserDao;
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
    private UserDao userDao;

    @Autowired
    public UserController(UserConverter userConverter, UserValidator userValidator, PostConverter postConverter, PostDao postDao, UserDao userDao) {
        this.userConverter = userConverter;
        this.userValidator = userValidator;
        this.postConverter = postConverter;
        this.postDao = postDao;
        this.userDao = userDao;
    }

    @GetMapping("/api/currentIdentity")
    public CurrentUserApiResponse getCurrentUser(@ModelAttribute IOAuth2User user) {
        userValidator.validateUser(user);
        return userConverter.toCurrentUserApiResponse(user);
    }

    // @formatter:off
    @GetMapping("/secure-api/users")
    public UsersPageApiResponse getUsers(
            @ModelAttribute IOAuth2User user, 
            @RequestParam Integer page, 
            @RequestParam Integer size, 
            @RequestParam(required = false, defaultValue = "username") String sortBy,
            @RequestParam(required = false, defaultValue = "desc") String sortDirection,
            @RequestParam(required = false, defaultValue = "") String filter) {
        GetUsersPageApiRequest request = userConverter.toGetUsersPageApiRequest(user, page, size, sortBy, sortDirection, filter);
        ValidGetUsersPageApiRequest validRequest = userValidator.validateGetUsersPageApiRequest(request);
        UsersPage usersPage = userDao.getUsers(validRequest);
        return userConverter.toUsersPageApiResponse(usersPage);
    }
    // @formatter:on

    // @formatter:off
    @GetMapping("/secure-api/user/posts-summaries")
    public UserPostsPageApiResponse getUserPosts(
            @ModelAttribute IOAuth2User user, 
            @RequestParam Integer page, 
            @RequestParam Integer size, 
            @RequestParam(required = false, defaultValue = "createdAt") String sortBy, 
            @RequestParam(required = false, defaultValue = "desc") String sortDirection, 
            @RequestParam(required = false, defaultValue = "") String filter) {
        GetUserPostsPageApiRequest request = postConverter.toGetUserPostsPageApiRequest(user, page, size, sortBy, sortDirection, filter);
        ValidGetUserPostsApiRequest validRequest = userValidator.validateGetUserPostsApiRequest(request);
        PostsPage postsPage = postDao.getUserPosts(validRequest);
        return postConverter.toUserPostsPageApiResponse(postsPage);
    }
    // @formatter:on

}

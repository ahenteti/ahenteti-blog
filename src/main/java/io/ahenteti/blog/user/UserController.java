package io.ahenteti.blog.user;

import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.post.model.api.response.UserPostApiResponse;
import io.ahenteti.blog.post.model.api.response.UserPostsApiResponse;
import io.ahenteti.blog.post.model.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.user.model.api.CurrentUserApiResponse;
import io.ahenteti.blog.user.model.api.GetUsersPageApiRequest;
import io.ahenteti.blog.user.model.api.UsersPageApiResponse;
import io.ahenteti.blog.user.model.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostsPage;
import io.ahenteti.blog.user.model.core.UsersPage;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.post.service.PostConverter;
import io.ahenteti.blog.user.service.UserConverter;
import io.ahenteti.blog.post.service.PostDao;
import io.ahenteti.blog.user.service.UserDao;
import io.ahenteti.blog.user.service.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
        return userConverter.toCurrentUserApiResponse(user);
    }

    // @formatter:off
    @GetMapping("/secure-api/users")
    public UsersPageApiResponse getUsers(
            @ModelAttribute IOAuth2User user, 
            @RequestParam String filter,
            @RequestParam Integer page, 
            @RequestParam Integer size, 
            @RequestParam(required = false, defaultValue = "USERNAME") String sortBy,
            @RequestParam(required = false, defaultValue = "asc") String sortDirection) {
        GetUsersPageApiRequest request = userConverter.toApiRequest(user, page, size, sortBy, sortDirection, filter);
        ValidGetUsersPageApiRequest validRequest = userValidator.validate(request);
        UsersPage usersPage = userDao.getUsers(validRequest);
        return userConverter.toApiResponse(usersPage);
    }
    // @formatter:on

}

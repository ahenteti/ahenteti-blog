package io.ahenteti.blog.user;

import io.ahenteti.blog.user.model.api.CurrentUserApiResponse;
import io.ahenteti.blog.user.model.api.DeleteUserApiRequest;
import io.ahenteti.blog.user.model.api.GetUsersPageApiRequest;
import io.ahenteti.blog.user.model.api.UsersPageApiResponse;
import io.ahenteti.blog.user.model.api.ValidDeleteUserApiRequest;
import io.ahenteti.blog.user.model.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.user.model.core.UsersPage;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.user.service.UserConverter;
import io.ahenteti.blog.user.service.UserDao;
import io.ahenteti.blog.user.service.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserConverter userConverter;
    private UserValidator userValidator;
    private UserDao userDao;

    @Autowired
    public UserController(UserConverter userConverter, UserValidator userValidator, UserDao userDao) {
        this.userConverter = userConverter;
        this.userValidator = userValidator;
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

    @Transactional
    @DeleteMapping("/secure-api/users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@ModelAttribute IOAuth2User user, @PathVariable Long id) {
        DeleteUserApiRequest request = new DeleteUserApiRequest(user, id);
        ValidDeleteUserApiRequest validRequest = userValidator.validate(request);
        userDao.delete(validRequest);
    }

}

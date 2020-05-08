package io.ahenteti.blog.controller;

import io.ahenteti.blog.exception.UserNotAuthenticatedException;
import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.security.OAuth2GithubUser;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserConverter userConverter;

    @GetMapping("/api/user")
    public UserApiResponse getUser(@AuthenticationPrincipal OAuth2GithubUser user) {
        if (user == null) throw new UserNotAuthenticatedException();
        return userConverter.toUserApiResponse(user);
    }

}

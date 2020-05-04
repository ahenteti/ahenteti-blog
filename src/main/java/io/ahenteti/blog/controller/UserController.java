package io.ahenteti.blog.controller;

import io.ahenteti.blog.exception.UnauthenticatedUserException;
import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @Autowired
    private UserConverter userConverter;

    @GetMapping("/api/user")
    public UserApiResponse getUser(Principal principal) {
        OAuth2User oAuth2User = validate(principal);
        return userConverter.toUserApiResponse(oAuth2User);
    }

    private OAuth2User validate(Principal principal) {
        if (!(principal instanceof OAuth2AuthenticationToken)) {
            throw new UnauthenticatedUserException();
        }
        return ((OAuth2AuthenticationToken) principal).getPrincipal();
    }
}

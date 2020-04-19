package org.ahenteti.java.user.controller;

import org.ahenteti.java.common.exception.ResourceNotFoundException;
import org.ahenteti.java.user.converter.IUserConverter;
import org.ahenteti.java.user.model.api.GetUserApiResult;
import org.ahenteti.java.user.model.business.User;
import org.ahenteti.java.user.service.IGetUserByUsernameService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class GetUserByUsernameController {

    private IGetUserByUsernameService getUserByUsernameService;
    private IUserConverter userConverter;

    public GetUserByUsernameController(IGetUserByUsernameService getUserByUsernameService, IUserConverter userConverter) {
        this.getUserByUsernameService = getUserByUsernameService;
        this.userConverter = userConverter;
    }

    @GetMapping("/api/users/{username}")
    private GetUserApiResult getUserById(String username) {
        Optional<User> optionalUser = getUserByUsernameService.getUserByUsername(username);
        User user = optionalUser.orElseThrow(() -> new ResourceNotFoundException(username));
        return userConverter.toGetUserApiResult(user);
    }
}

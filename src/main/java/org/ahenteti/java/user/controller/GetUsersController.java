package org.ahenteti.java.user.controller;

import org.ahenteti.java.user.converter.IUsersConverter;
import org.ahenteti.java.user.model.api.GetUsersApiResult;
import org.ahenteti.java.user.model.business.Users;
import org.ahenteti.java.user.service.IGetUsersService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetUsersController {

    private IGetUsersService getUsersService;
    private IUsersConverter usersConverter;

    public GetUsersController(IGetUsersService getUsersService, IUsersConverter usersConverter) {
        this.getUsersService = getUsersService;
        this.usersConverter = usersConverter;
    }

    @GetMapping("/api/users")
    private GetUsersApiResult getUsers() {
        Users users = getUsersService.getUsers();
        return usersConverter.toGetUsersApiResult(users);
    }
}

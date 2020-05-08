package io.ahenteti.blog.controller;

import io.ahenteti.blog.exception.UserNotAuthenticatedException;
import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class UserController {

    @Autowired
    private UserConverter userConverter;

    @GetMapping("/api/isAuthenticated")
    public UserApiResponse getUser(@ModelAttribute IUser user) {
        if (user == null) throw new UserNotAuthenticatedException();
        return userConverter.toUserApiResponse(user);
    }

    @GetMapping("/api/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication user) throws IOException {
        if (user != null) {
            new SecurityContextLogoutHandler().logout(request, response, user);
        }
        response.sendRedirect("/");
    }

}

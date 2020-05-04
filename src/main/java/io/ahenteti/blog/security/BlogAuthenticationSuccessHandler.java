package io.ahenteti.blog.security;

import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class BlogAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private UserDao userDao;
    private UserConverter userConverter;

    @Autowired
    public BlogAuthenticationSuccessHandler(UserDao userDao, UserConverter userConverter) {
        this.userDao = userDao;
        this.userConverter = userConverter;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        userConverter.toUser(authentication).ifPresent(userDao::createIfNotExists);
        response.sendRedirect("/");
    }
}

package io.ahenteti.blog.security;

import io.ahenteti.blog.model.core.GithubUser;
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
public class OAuth2GithubAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private UserDao userDao;

    @Autowired
    public OAuth2GithubAuthenticationSuccessHandler(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        GithubUser user = (GithubUser) authentication.getPrincipal();
        user.setDatabaseUserId(userDao.createOrUpdate(user).getId());
        response.sendRedirect("/");
    }
}

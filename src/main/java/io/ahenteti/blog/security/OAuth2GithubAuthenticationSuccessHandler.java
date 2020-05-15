package io.ahenteti.blog.security;

import io.ahenteti.blog.model.core.user.GithubUser;
import io.ahenteti.blog.service.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Component
public class OAuth2GithubAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    public static final String USER_URL_BEFORE_LOGIN_COOKIE = "url_before_login";
    private UserDao userDao;

    @Autowired
    public OAuth2GithubAuthenticationSuccessHandler(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        GithubUser user = (GithubUser) authentication.getPrincipal();
        user.setDatabaseUserId(userDao.createOrUpdate(user).getId());
        String redirectUrl = Arrays.stream(request.getCookies())
                .filter(c -> USER_URL_BEFORE_LOGIN_COOKIE.equals(c.getName())).findFirst().map(Cookie::getValue)
                .orElse("/");
        response.sendRedirect(redirectUrl);
    }
}

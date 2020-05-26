package io.ahenteti.blog.service.oauth2;

import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.core.user.oauth2.OAuth2GithubUser;
import io.ahenteti.blog.model.core.user.oauth2.OAuth2OidcUser;
import io.ahenteti.blog.service.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Component
public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private static final String USER_URL_BEFORE_LOGIN_COOKIE = "url_before_login";
    private UserDao userDao;

    @Autowired
    public OAuth2AuthenticationSuccessHandler(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        IOAuth2User oAuth2User = getPrincipal(authentication);
        User user = userDao.createIfNotExists(oAuth2User);
        oAuth2User.setDbId(user.getId());
        oAuth2User.setRoles(user.getRoles());
        String redirectUrl = Arrays.stream(request.getCookies())
                .filter(c -> USER_URL_BEFORE_LOGIN_COOKIE.equals(c.getName())).findFirst().map(Cookie::getValue)
                .orElse("/");
        response.sendRedirect(redirectUrl);
    }

    private IOAuth2User getPrincipal(Authentication authentication) {
        if (authentication.getPrincipal() instanceof DefaultOidcUser) {
            return (OAuth2OidcUser) authentication.getPrincipal();
        } else {
            return (OAuth2GithubUser) authentication.getPrincipal();
        }
    }
}

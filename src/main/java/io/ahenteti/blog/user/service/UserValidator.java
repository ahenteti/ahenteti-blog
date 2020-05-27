package io.ahenteti.blog.user.service;

import io.ahenteti.blog.shared.exception.AuthenticationException;
import io.ahenteti.blog.shared.exception.AuthorizationException;
import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.user.model.api.GetUsersPageApiRequest;
import io.ahenteti.blog.user.model.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.shared.service.PageApiRequestValidator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserValidator {

    private PageApiRequestValidator pageApiRequestValidator;

    @Autowired
    public UserValidator(PageApiRequestValidator pageApiRequestValidator) {
        this.pageApiRequestValidator = pageApiRequestValidator;
    }

    public ValidGetUsersPageApiRequest validate(GetUsersPageApiRequest request) {
        validateAdminUser(request.getUser());
        pageApiRequestValidator.validate(request);
        return new ValidGetUsersPageApiRequest(request);
    }

    public ValidGetUserPostsApiRequest validate(GetUserPostsPageApiRequest request) {
        validateAuthenticatedUser(request.getUser());
        pageApiRequestValidator.validate(request);
        return new ValidGetUserPostsApiRequest(request);
    }

    public void validateAdminUser(IOAuth2User user) {
        if (!user.isAdmin()) {
            throw new AuthorizationException("user is not admin");
        }
    }

    public void validateAuthenticatedUser(IOAuth2User user) {
        if (user == null) {
            throw new AuthenticationException("user not authenticated");
        }
        if (user.getDbId() == null) {
            // must be set in the io.ahenteti.blog.security.OAuth2GithubAuthenticationSuccessHandler handler 
            throw new AuthenticationException("authenticated user must have user id");
        }
        if (StringUtils.isBlank(user.getUsername())) {
            throw new AuthenticationException("authenticated user must have username");
        }
    }

}

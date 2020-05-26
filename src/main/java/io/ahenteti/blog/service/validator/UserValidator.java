package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.AuthenticationException;
import io.ahenteti.blog.exception.AuthorizationException;
import io.ahenteti.blog.model.api.post.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.api.user.GetUsersPageApiRequest;
import io.ahenteti.blog.model.api.user.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
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

    public ValidGetUsersPageApiRequest validateGetUsersPageApiRequest(GetUsersPageApiRequest request) {
        validateAdminUser(request.getUser());
        pageApiRequestValidator.validatePageApiRequest(request);
        return new ValidGetUsersPageApiRequest(request);
    }

    public ValidGetUserPostsApiRequest validateGetUserPostsApiRequest(GetUserPostsPageApiRequest request) {
        validateAuthenticatedUser(request.getUser());
        pageApiRequestValidator.validatePageApiRequest(request);
        return new ValidGetUserPostsApiRequest(request);
    }

    public void validateAdminUser(IOAuth2User user) {
        validateAuthenticatedUser(user);
        if (!user.isAdmin()) {
            throw new AuthorizationException("user is not admin");
        }
    }

    public void validateAuthenticatedUser(IOAuth2User user) {
        if (user == null) {
            throw new AuthenticationException("user not authenticated");
        }
        if (user.getPrimaryKey() == null) {
            // must be set in the io.ahenteti.blog.security.OAuth2GithubAuthenticationSuccessHandler handler 
            throw new AuthenticationException("authenticated user must have user id");
        }
        if (StringUtils.isBlank(user.getUsername())) {
            throw new AuthenticationException("authenticated user must have username");
        }
    }

}

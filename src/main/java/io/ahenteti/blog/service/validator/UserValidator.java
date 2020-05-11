package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.AuthenticationException;
import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.IUser;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
public class UserValidator {

    public void validateUser(IUser user) {
        if (user == null) {
            throw new AuthenticationException("user not authenticated");
        }
        if (user.getId() == null) {
            // must be set in the io.ahenteti.blog.security.OAuth2GithubAuthenticationSuccessHandler handler 
            throw new AuthenticationException("authenticated user must have user id");
        }
        if (StringUtils.isBlank(user.getUsername())) {
            throw new AuthenticationException("authenticated user must have username");
        }
    }

    public void validateGetUserPostsApiRequest(GetUserPostsApiRequest request) {
        validateUser(request.getUser());
        validateUserPostsPage((request));
        validateUserPostsSize(request);
    }

    private void validateUserPostsSize(GetUserPostsApiRequest request) {
        if (request.getSize() == null) {
            throw new MissingMandatoryRequestAttributeException("size query param is mandatory");
        }
    }

    private void validateUserPostsPage(GetUserPostsApiRequest request) {
        if (request.getPage() == null) {
            throw new MissingMandatoryRequestAttributeException("page query param is mandatory");
        }
    }
}

package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.AuthenticationException;
import io.ahenteti.blog.model.core.IUser;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
public class UserValidator {

    public void validate(IUser user) {
        if (user == null) {
            throw new AuthenticationException("user not authenticated");
        }
        if (user.getId() == null) {
            // must be set in the io.ahenteti.blog.security.OAuth2GithubAuthenticationSuccessHandler handler 
            throw new AuthenticationException("authenticated user must have user id.");
        }
        if (StringUtils.isBlank(user.getUsername())) {
            throw new AuthenticationException("authenticated user must have username.");
        }
    }
}

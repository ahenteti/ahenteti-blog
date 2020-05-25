package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.AuthenticationException;
import io.ahenteti.blog.exception.InvalidRequestAttributeException;
import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.post.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.api.user.GetUsersPageApiRequest;
import io.ahenteti.blog.model.api.user.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.model.core.post.EPostsSortBy;
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

    public void validateAdminUser(IOAuth2User user) {
        if (!user.isAdmin()) {
            throw new AuthenticationException("user is not admin");
        }
        validateUser(user);
    }

    public void validateUser(IOAuth2User user) {
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

    public ValidGetUserPostsApiRequest validateGetUserPostsApiRequest(GetUserPostsPageApiRequest request) {
        validateUser(request.getUser());
        validateUserPostsPage((request));
        validateUserPostsSize(request);
        validateUserPostsSortBy(request);
        return new ValidGetUserPostsApiRequest(request);
    }

    private void validateUserPostsSortBy(GetUserPostsPageApiRequest request) {
        if (request.getSortBy() == null) {
            throw new MissingMandatoryRequestAttributeException("sortBy query param is mandatory");
        }
        if (EPostsSortBy.getByValue(request.getSortBy()) == null) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown sortBy query param value: ");
            sb.append(request.getSortBy());
            sb.append(". Accepted values: ");
            for (EPostsSortBy sortBy : EPostsSortBy.values()) {
                sb.append(sortBy.getValue());
                sb.append(" ");
            }
            throw new InvalidRequestAttributeException(sb.toString());
        }
    }

    private void validateUserPostsSize(GetUserPostsPageApiRequest request) {
        if (request.getSize() == null) {
            throw new MissingMandatoryRequestAttributeException("size query param is mandatory");
        }
    }

    private void validateUserPostsPage(GetUserPostsPageApiRequest request) {
        if (request.getPage() == null) {
            throw new MissingMandatoryRequestAttributeException("page query param is mandatory");
        }
    }


}

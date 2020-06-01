package io.ahenteti.blog.service.user;

import io.ahenteti.blog.core.exception.AuthenticationException;
import io.ahenteti.blog.core.exception.AuthorizationException;
import io.ahenteti.blog.core.exception.ResourceNotFoundException;
import io.ahenteti.blog.core.model.user.api.DeleteUserApiRequest;
import io.ahenteti.blog.core.model.user.api.GetUsersPageApiRequest;
import io.ahenteti.blog.core.model.user.api.ValidDeleteUserApiRequest;
import io.ahenteti.blog.core.model.user.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.core.model.user.core.User;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.shared.PageApiRequestValidator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

import static io.ahenteti.blog.service.utils.ObjectValidatorUtils.validateNotNull;


@Service
public class UserValidator {

    private PageApiRequestValidator pageApiRequestValidator;
    private UserRepository userRepository;

    @Autowired
    public UserValidator(PageApiRequestValidator pageApiRequestValidator, UserRepository userRepository) {
        this.pageApiRequestValidator = pageApiRequestValidator;
        this.userRepository = userRepository;
    }

    public ValidGetUsersPageApiRequest validate(GetUsersPageApiRequest request) {
        validateAdminUser(request.getUser());
        pageApiRequestValidator.validate(request);
        return new ValidGetUsersPageApiRequest(request);
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

    public UserEntity validate(User user) {
        return userRepository.findById(user.getId()).orElseThrow(throwUserNotFoundException(user.getId()));
    }

    public ValidDeleteUserApiRequest validate(DeleteUserApiRequest request) {
        validateAuthenticatedUser(request.getUser());
        validateAdminUser(request.getUser());
        validateNotNull("DeleteUserApiRequest.userId", request.getUserIdToDelete());
        validateUserCanNotDeleteHimself(request.getUser(), request.getUserIdToDelete());
        return new ValidDeleteUserApiRequest(request);
    }

    private void validateUserCanNotDeleteHimself(IOAuth2User user, Long userIdToDelete) {
        if (user.getDbId().equals(userIdToDelete)) {
            throw new AuthorizationException("User can not delete himself");
        }
    }

    private Supplier<ResourceNotFoundException> throwUserNotFoundException(Long authorId) {
        return () -> new ResourceNotFoundException("User not found with id: " + authorId);
    }

}

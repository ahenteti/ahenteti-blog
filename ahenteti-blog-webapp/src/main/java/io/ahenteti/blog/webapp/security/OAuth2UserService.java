package io.ahenteti.blog.webapp.security;

import io.ahenteti.blog.core.model.user.oauth2.OAuth2OidcUser;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

@Service
public class OAuth2UserService extends OidcUserService {

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2OidcUser user = new OAuth2OidcUser(super.loadUser(userRequest), userRequest.getClientRegistration()
                .getRegistrationId());
        return user;
    }
}

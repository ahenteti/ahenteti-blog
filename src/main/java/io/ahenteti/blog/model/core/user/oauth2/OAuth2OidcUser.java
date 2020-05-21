package io.ahenteti.blog.model.core.user.oauth2;

import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

public class OAuth2OidcUser extends DefaultOidcUser implements IOAuth2User {

    private Long primaryKey;
    private String provider;

    public OAuth2OidcUser(OidcUser user, String provider) {
        super(user.getAuthorities(), user.getIdToken());
        this.provider = provider;
    }

    @Override
    public void setPrimaryKey(Long id) {
        this.primaryKey = id;
    }


    @Override
    public Long getPrimaryKey() {
        return primaryKey;
    }

    @Override
    public String getUsername() {
        return getFullName();
    }

    @Override
    public String getAvatarUrl() {
        return getPicture();
    }

    @Override
    public String getProvider() {
        return this.provider;
    }
}

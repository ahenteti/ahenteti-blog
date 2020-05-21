package io.ahenteti.blog.model.core.user.oauth2;

import io.ahenteti.blog.model.core.user.EUserRole;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

import java.util.ArrayList;
import java.util.List;

public class OAuth2OidcUser extends DefaultOidcUser implements IOAuth2User {

    private Long primaryKey;
    private String provider;
    private List<EUserRole> roles = new ArrayList<>();

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

    @Override
    public void setRoles(List<EUserRole> roles) {
        this.roles = roles;
    }

    @Override
    public List<EUserRole> getRoles() {
        return this.roles;
    }
}

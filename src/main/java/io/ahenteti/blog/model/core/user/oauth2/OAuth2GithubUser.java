package io.ahenteti.blog.model.core.user.oauth2;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.ahenteti.blog.model.core.user.EUserRole;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class OAuth2GithubUser implements IOAuth2User {

    private List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_USER");
    private Map<String, Object> attributes;
    private Long primaryKey;
    private String name;
    @JsonProperty("avatar_url")
    private String avatarUrl;
    private List<EUserRole> roles = new ArrayList<>();

    @Override
    public Map<String, Object> getAttributes() {
        if (this.attributes == null) {
            this.attributes = new HashMap<>();
            this.attributes.put("name", this.getName());
            this.attributes.put("avatar_url", this.getAvatarUrl());
        }
        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public Long getDbId() {
        return this.primaryKey;
    }

    @Override
    public void setDbId(Long id) {
        this.primaryKey = id;
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public String getAvatarUrl() {
        return this.avatarUrl;
    }

    @Override
    public String getProvider() {
        return "github";
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

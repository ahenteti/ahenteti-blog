package io.ahenteti.blog.model.core;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.ahenteti.blog.model.core.IUser;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class GithubUser implements IUser {

    private List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_USER");
    private Map<String, Object> attributes;
    private Long databaseUserId;
    private String name;
    @JsonProperty("avatar_url")
    private String avatarUrl;

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
    public Long getId() {
        return this.databaseUserId;
    }

    public Long getDatabaseUserId() {
        return this.databaseUserId;
    }

    public void setDatabaseUserId(Long id) {
        this.databaseUserId = id;
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public String getAvatar() {
        return this.avatarUrl;
    }


}

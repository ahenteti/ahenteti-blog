package io.ahenteti.blog.model.core.user.oauth2;

import org.springframework.security.oauth2.core.user.OAuth2User;

public interface IOAuth2User extends OAuth2User {

    void setPrimaryKey(Long id);

    Long getPrimaryKey();

    String getUsername();

    String getAvatarUrl();
    
    String getProvider();
    
}

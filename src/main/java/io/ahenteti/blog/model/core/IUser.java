package io.ahenteti.blog.model.core;

import org.springframework.security.oauth2.core.user.OAuth2User;

public interface IUser extends OAuth2User {
    Long getId();

    String getUsername();

    String getAvatar();
}

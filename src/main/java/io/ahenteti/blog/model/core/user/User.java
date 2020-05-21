package io.ahenteti.blog.model.core.user;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String username;
    private String avatarUrl;
    private String provider;
}

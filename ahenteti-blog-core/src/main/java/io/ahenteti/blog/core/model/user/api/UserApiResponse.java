package io.ahenteti.blog.core.model.user.api;

import lombok.Data;

@Data
public class UserApiResponse {
    private Long id;
    private String username;
    private String avatarUrl;
    private String provider;
    private String joinAtIso8601;
}

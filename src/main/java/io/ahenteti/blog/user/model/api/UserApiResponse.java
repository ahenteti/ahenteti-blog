package io.ahenteti.blog.user.model.api;

import lombok.Data;

@Data
public class UserApiResponse {
    private Long id;
    private String username;
    private String avatarUrl;
    private String provider;
    private String joinAtIso8601;
}

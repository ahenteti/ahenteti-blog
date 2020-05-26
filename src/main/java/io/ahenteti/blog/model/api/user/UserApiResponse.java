package io.ahenteti.blog.model.api.user;

import lombok.Data;

@Data
public class UserApiResponse {
    private String username;
    private String avatarUrl;
    private String provider;
    private String joinAtIso8601;
}

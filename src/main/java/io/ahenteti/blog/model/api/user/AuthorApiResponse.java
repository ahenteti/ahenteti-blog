package io.ahenteti.blog.model.api.user;

import lombok.Data;

@Data
public class AuthorApiResponse {
    private String username;
    private String avatarUrl;
}

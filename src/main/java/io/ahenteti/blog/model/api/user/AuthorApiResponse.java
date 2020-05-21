package io.ahenteti.blog.model.api.user;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AuthorApiResponse {
    private String username;
    private String avatarUrl;
}

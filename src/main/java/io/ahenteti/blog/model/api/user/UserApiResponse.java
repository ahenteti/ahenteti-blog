package io.ahenteti.blog.model.api.user;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserApiResponse {
    private String username;
    private String avatarUrl;
    private List<String> roles = new ArrayList<>();
}

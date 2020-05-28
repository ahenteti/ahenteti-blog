package io.ahenteti.blog.user.model.api;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CurrentUserApiResponseBody {
    private String username;
    private String avatarUrl;
    private List<String> roles = new ArrayList<>();
}
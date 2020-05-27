package io.ahenteti.blog.user.model.core;

import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
public class User {
    private Long id;
    private String username;
    private String avatarUrl;
    private String provider;
    private Instant joinAt;
    private List<EUserRole> roles = new ArrayList<>();

    public boolean isAdmin() {
        return getRoles().stream().anyMatch(EUserRole.ADMIN::equals);
    }
}

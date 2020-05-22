package io.ahenteti.blog.model.core.user;

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
}

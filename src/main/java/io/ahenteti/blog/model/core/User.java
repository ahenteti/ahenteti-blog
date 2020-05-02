package io.ahenteti.blog.model.core;

import lombok.Data;

@Data
public class User extends UserSummary {
    private Posts posts = new Posts();
}

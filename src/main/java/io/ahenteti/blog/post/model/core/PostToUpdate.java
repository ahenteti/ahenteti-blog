package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.user.model.core.User;
import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;

@Data
public class PostToUpdate {

    private Long id;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String body;
    private Instant lastUpdatedAt;
    private User author;

}

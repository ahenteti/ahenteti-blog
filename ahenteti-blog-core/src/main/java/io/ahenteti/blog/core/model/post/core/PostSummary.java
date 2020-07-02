package io.ahenteti.blog.core.model.post.core;

import io.ahenteti.blog.core.model.post.entity.EPostStatus;
import io.ahenteti.blog.core.model.user.core.User;
import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Data
public class PostSummary {
    private Long id;
    private String slug;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private Instant createdAt;
    private Optional<Instant> lastUpdatedAt = Optional.empty();
    private EPostStatus status;
    private User author;
}

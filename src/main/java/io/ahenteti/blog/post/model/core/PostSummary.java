package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.user.model.core.User;
import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Data
public class PostSummary {
    protected Long id;
    protected String title;
    protected String category;
    protected Collection<String> tags = new ArrayList<>();
    protected Instant createdAt;
    protected Optional<Instant> lastUpdatedAt = Optional.empty();
    protected User author;
}
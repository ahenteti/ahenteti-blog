package io.ahenteti.blog.model.core.post;

import io.ahenteti.blog.model.core.user.IUser;
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
    protected IUser author;
}

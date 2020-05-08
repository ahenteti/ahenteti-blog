package io.ahenteti.blog.model.core;

import lombok.Data;

import java.time.Instant;
import java.util.Collection;
import java.util.Optional;

@Data
public class PostSummary {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags;
    private Instant createdAt;
    private Optional<Instant> lastUpdatedAt;
    private IUser author;
}

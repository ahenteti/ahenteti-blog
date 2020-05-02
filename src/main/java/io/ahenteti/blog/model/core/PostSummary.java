package io.ahenteti.blog.model.core;

import lombok.Data;

import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.Optional;

@Data
public class PostSummary {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags;
    private ZonedDateTime createdAt;
    private Optional<ZonedDateTime> lastUpdatedAt;
    private UserSummary author;
}

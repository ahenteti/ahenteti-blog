package io.ahenteti.blog.model.core;

import lombok.Data;

import java.time.ZonedDateTime;

@Data
public class Comment {
    private String value;
    private ZonedDateTime createdAt;
    private UserSummary author;
    private Post post;
}

package io.ahenteti.blog.model.core;

import lombok.Data;

import java.time.Instant;

@Data
public class PostComment {
    private String value;
    private Instant createdAt;
    private IUser author;
    private Long postId;
}
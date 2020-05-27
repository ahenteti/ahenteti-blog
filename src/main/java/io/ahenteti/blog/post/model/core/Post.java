package io.ahenteti.blog.post.model.core;

import lombok.Data;

@Data
public class Post extends PostSummary {
    protected String body;
}

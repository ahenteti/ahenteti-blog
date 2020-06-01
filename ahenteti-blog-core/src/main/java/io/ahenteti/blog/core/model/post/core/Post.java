package io.ahenteti.blog.core.model.post.core;

import lombok.Data;

@Data
public class Post extends PostSummary {
    protected String body;
}

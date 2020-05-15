package io.ahenteti.blog.model.core.post;

import lombok.Data;

@Data
public class Post extends PostSummary {
    protected String body;
}

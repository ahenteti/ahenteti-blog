package io.ahenteti.blog.model.core;

import lombok.Data;

@Data
public class Post extends PostSummary {
    private Comments comments = new Comments();
    private String body;
}

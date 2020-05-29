package io.ahenteti.blog.post.model.api.response;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class UserPostApiResponse {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String bodyMarkdownBase64;
}

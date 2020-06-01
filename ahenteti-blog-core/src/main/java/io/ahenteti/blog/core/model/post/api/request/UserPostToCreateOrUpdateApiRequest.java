package io.ahenteti.blog.core.model.post.api.request;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class UserPostToCreateOrUpdateApiRequest {
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String bodyMarkdownBase64;
}

package io.ahenteti.blog.core.model.post.api.response;

import io.ahenteti.blog.core.model.user.api.AuthorApiResponse;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PostSummaryApiResponse {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String createdAtIso8601;
    private String lastUpdatedAtIso8601;
    private AuthorApiResponse author;
}

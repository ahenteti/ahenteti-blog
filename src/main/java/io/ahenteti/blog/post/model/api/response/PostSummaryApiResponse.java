package io.ahenteti.blog.post.model.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.ahenteti.blog.user.model.api.AuthorApiResponse;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostSummaryApiResponse {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String createdAtIso8601;
    private String lastUpdatedAtIso8601;
    private AuthorApiResponse author;
}

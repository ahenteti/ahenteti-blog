package io.ahenteti.blog.model.api.post.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserPostApiResponse {
    private Long id;
    private String title;
    private String category;
    private Collection<String> tags = new ArrayList<>();
    private String createdAtIso8601;
    private String lastUpdatedAtIso8601;
    private String bodyMarkdownBase64;
}

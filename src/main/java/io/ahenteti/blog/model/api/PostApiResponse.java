package io.ahenteti.blog.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostApiResponse extends PostSummaryApiResponse {
    private String bodyMarkdownBase64;
    private CommentsApiResponse comments = new CommentsApiResponse();
}

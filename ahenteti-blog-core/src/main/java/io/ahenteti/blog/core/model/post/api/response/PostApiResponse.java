package io.ahenteti.blog.core.model.post.api.response;

import lombok.Data;

@Data
public class PostApiResponse extends PostSummaryApiResponse {
    private String bodyMarkdownBase64;
}

package io.ahenteti.blog.core.model.feedback.api.response;

import io.ahenteti.blog.core.model.user.api.AuthorApiResponse;
import lombok.Data;

@Data
public class FeedbackApiResponse {
    private String value;
    private String createdAtIso8601;
    private AuthorApiResponse author;
}

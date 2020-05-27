package io.ahenteti.blog.feedback.model.api.response;

import io.ahenteti.blog.user.model.api.AuthorApiResponse;
import lombok.Data;

@Data
public class FeedbackApiResponse {
    private String value;
    private String createdAtIso8601;
    private AuthorApiResponse author;
}

package io.ahenteti.blog.model.api.feedback.response;

import io.ahenteti.blog.model.api.user.AuthorApiResponse;
import lombok.Data;

@Data
public class FeedbackApiResponse {
    private String value;
    private String createdAtIso8601;
    private AuthorApiResponse author;
}
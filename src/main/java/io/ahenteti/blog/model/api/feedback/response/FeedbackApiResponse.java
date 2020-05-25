package io.ahenteti.blog.model.api.feedback.response;

import io.ahenteti.blog.model.api.user.AuthorApiResponse;
import lombok.Data;

import java.time.Instant;

@Data
public class FeedbackApiResponse {
    private String value;
    private Instant createdAt;
    private AuthorApiResponse author;
}

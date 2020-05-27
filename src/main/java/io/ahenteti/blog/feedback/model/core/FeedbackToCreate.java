package io.ahenteti.blog.feedback.model.core;

import io.ahenteti.blog.user.model.core.User;
import lombok.Data;

import java.time.Instant;

@Data
public class FeedbackToCreate {
    private String value;
    private Instant createdAt;
    private User author;
}

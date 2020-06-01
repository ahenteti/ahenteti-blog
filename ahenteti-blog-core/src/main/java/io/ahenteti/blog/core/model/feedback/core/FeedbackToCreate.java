package io.ahenteti.blog.core.model.feedback.core;

import io.ahenteti.blog.core.model.user.core.User;
import lombok.Data;

import java.time.Instant;

@Data
public class FeedbackToCreate {
    private String value;
    private Instant createdAt;
    private User author;
}

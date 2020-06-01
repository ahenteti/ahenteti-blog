package io.ahenteti.blog.core.model.feedback.core;

import io.ahenteti.blog.core.model.user.core.User;
import lombok.Data;

import java.time.Instant;

@Data
public class Feedback {
    private String value;
    private Instant createdAt;
    protected User author;
}

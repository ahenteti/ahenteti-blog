package io.ahenteti.blog.model.core.feedback;

import io.ahenteti.blog.model.core.user.User;
import lombok.Data;

import java.time.Instant;

@Data
public class FeedbackToCreate {
    private String value;
    private Instant createdAt;
    private User author;
}

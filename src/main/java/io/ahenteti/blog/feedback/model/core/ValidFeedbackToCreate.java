package io.ahenteti.blog.feedback.model.core;

import io.ahenteti.blog.user.model.entity.UserEntity;
import lombok.Data;

import java.time.Instant;

@Data
public class ValidFeedbackToCreate {
    private String value;
    private Instant createdAt;
    private UserEntity author;

    public ValidFeedbackToCreate(FeedbackToCreate feedback, UserEntity author) {
        this.value = feedback.getValue();
        this.createdAt = feedback.getCreatedAt();
        this.author = author;
    }
}

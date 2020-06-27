package io.ahenteti.blog.core.model.postcomments.core;

import io.ahenteti.blog.core.model.user.core.User;
import lombok.Data;

import java.time.Instant;

@Data
public class PostCommentToCreate {
    private String value;
    private Instant createdAt;
    private User author;
    private String slug;
}

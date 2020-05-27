package io.ahenteti.blog.postcomments.model.core;

import io.ahenteti.blog.user.model.core.User;
import lombok.Data;

import java.time.Instant;

@Data
public class PostCommentToCreate {
    private String value;
    private Instant createdAt;
    private User author;
    private Long postId;
}

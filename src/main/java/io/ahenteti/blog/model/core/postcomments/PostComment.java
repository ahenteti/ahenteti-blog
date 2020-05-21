package io.ahenteti.blog.model.core.postcomments;

import io.ahenteti.blog.model.core.user.User;
import lombok.Data;

import java.time.Instant;

@Data
public class PostComment {
    private Long id;
    private String value;
    private Instant createdAt;
    private User author;
    private Long postId;
}

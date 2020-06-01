package io.ahenteti.blog.core.model.postcomments.core;

import io.ahenteti.blog.core.model.post.entity.PostEntity;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import lombok.Data;

import java.time.Instant;

@Data
public class ValidPostCommentToCreate {
    private String value;
    private Instant createdAt;
    private UserEntity author;
    private PostEntity post;

    public ValidPostCommentToCreate(PostCommentToCreate comment, UserEntity author, PostEntity post) {
        this.value = comment.getValue();
        this.createdAt = comment.getCreatedAt();
        this.author = author;
        this.post = post;
    }
}

package io.ahenteti.blog.model.api;

import io.ahenteti.blog.model.core.IUser;
import lombok.Data;

@Data
public class CreatePostCommentApiRequest {
    private IUser author;
    private Long postId;
    private String value;
}

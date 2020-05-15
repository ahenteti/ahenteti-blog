package io.ahenteti.blog.model.api.postcomments;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class CreatePostCommentApiRequest {
    protected IUser author;
    protected Long postId;
    protected String value;
}

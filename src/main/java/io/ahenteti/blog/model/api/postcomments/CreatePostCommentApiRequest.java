package io.ahenteti.blog.model.api.postcomments;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreatePostCommentApiRequest {
    protected IOAuth2User author;
    protected Long postId;
    protected String value;
}

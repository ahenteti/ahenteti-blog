package io.ahenteti.blog.postcomments.model.api;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreatePostCommentApiRequest {
    protected IOAuth2User author;
    protected Long postId;
    protected String value;
}

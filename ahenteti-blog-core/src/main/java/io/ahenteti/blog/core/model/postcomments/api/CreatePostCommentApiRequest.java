package io.ahenteti.blog.core.model.postcomments.api;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreatePostCommentApiRequest {
    protected IOAuth2User author;
    protected String slug;
    protected String value;
}

package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class UpdatePostApiRequest {
    private Long postId;
    private IOAuth2User author;
    private UpdatePostApiRequestBody body;
}

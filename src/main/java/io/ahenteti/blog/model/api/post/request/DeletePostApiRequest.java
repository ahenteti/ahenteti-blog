package io.ahenteti.blog.model.api.post.request;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class DeletePostApiRequest {
    private IOAuth2User user;
    private Long postId;
}

package io.ahenteti.blog.core.model.post.api.request;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class DeletePostApiRequest {
    private IOAuth2User user;
    private String slug;
}

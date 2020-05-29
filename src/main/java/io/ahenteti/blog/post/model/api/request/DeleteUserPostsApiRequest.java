package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class DeleteUserPostsApiRequest {
    private IOAuth2User user;
}

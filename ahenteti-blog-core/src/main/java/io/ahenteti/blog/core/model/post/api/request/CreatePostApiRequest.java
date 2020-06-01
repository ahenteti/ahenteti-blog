package io.ahenteti.blog.core.model.post.api.request;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreatePostApiRequest  {
    private IOAuth2User author;
    private CreatePostApiRequestBody body;
}

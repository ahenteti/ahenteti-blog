package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreatePostApiRequest  {
    private IOAuth2User author;
    private CreatePostApiRequestBody body;
}

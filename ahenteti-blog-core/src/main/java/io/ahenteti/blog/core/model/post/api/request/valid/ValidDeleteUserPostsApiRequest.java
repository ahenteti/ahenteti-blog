package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.DeleteUserPostsApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidDeleteUserPostsApiRequest {
    private IOAuth2User user;

    public ValidDeleteUserPostsApiRequest(DeleteUserPostsApiRequest request) {
        this.user = request.getUser();
    }
}

package io.ahenteti.blog.post.model.api.request.valid;

import io.ahenteti.blog.post.model.api.request.DeleteUserPostsApiRequest;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidDeleteUserPostsApiRequest {
    private IOAuth2User user;

    public ValidDeleteUserPostsApiRequest(DeleteUserPostsApiRequest request) {
        this.user = request.getUser();
    }
}

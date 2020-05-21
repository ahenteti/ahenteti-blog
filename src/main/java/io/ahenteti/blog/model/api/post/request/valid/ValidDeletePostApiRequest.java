package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidDeletePostApiRequest {
    private IOAuth2User user;
    private Long postId;

    public ValidDeletePostApiRequest(DeletePostApiRequest request) {
        this.user = request.getUser();
        this.postId = request.getPostId();
    }
}

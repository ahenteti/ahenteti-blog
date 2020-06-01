package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.DeletePostApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
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

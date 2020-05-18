package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class ValidDeletePostApiRequest {
    private IUser user;
    private Long postId;

    public ValidDeletePostApiRequest(DeletePostApiRequest request) {
        this.user = request.getUser();
        this.postId = request.getPostId();
    }
}

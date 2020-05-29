package io.ahenteti.blog.post.model.api.request.valid;

import io.ahenteti.blog.post.model.core.Post;
import lombok.Data;

@Data
public class ValidGetPostApiRequest {
    private Post post;

    public ValidGetPostApiRequest(Post post) {
        this.post = post;
    }
}

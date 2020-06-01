package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.core.Post;
import lombok.Data;

@Data
public class ValidGetPostApiRequest {
    private Post post;

    public ValidGetPostApiRequest(Post post) {
        this.post = post;
    }
}

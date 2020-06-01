package io.ahenteti.blog.core.model.postcomments.api;

import lombok.Data;

@Data
public class ValidCreatePostCommentApiRequest extends CreatePostCommentApiRequest {
    public ValidCreatePostCommentApiRequest(CreatePostCommentApiRequest request) {
        this.author = request.getAuthor();
        this.postId = request.getPostId();
        this.value = request.getValue();
    }
}

package io.ahenteti.blog.core.model.postcomments.api;

import io.ahenteti.blog.core.model.user.api.AuthorApiResponse;
import lombok.Data;

@Data
public class PostCommentApiResponse {
    private AuthorApiResponse author;
    private String createdAtIso8601;
    private String value;
}

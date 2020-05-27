package io.ahenteti.blog.postcomments.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.ahenteti.blog.user.model.api.AuthorApiResponse;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostCommentApiResponse {
    private AuthorApiResponse author;
    private String createdAtIso8601;
    private String value;
}

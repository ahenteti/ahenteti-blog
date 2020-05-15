package io.ahenteti.blog.model.api.postcomments;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.ahenteti.blog.model.api.user.UserApiResponse;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostCommentApiResponse {
    private UserApiResponse author;
    private String createdAtIso8601;
    private String value;
}

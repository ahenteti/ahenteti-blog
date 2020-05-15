package io.ahenteti.blog.model.api.postcomments;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.ArrayList;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostCommentsApiResponse extends ArrayList<PostCommentApiResponse> {
}

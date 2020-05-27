package io.ahenteti.blog.postcomments.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.ArrayList;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostCommentsApiResponse extends ArrayList<PostCommentApiResponse> {
}

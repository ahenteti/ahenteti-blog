package io.ahenteti.blog.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.ArrayList;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommentsApiResponse extends ArrayList<CommentApiResponse> {
}

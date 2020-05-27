package io.ahenteti.blog.post.model.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.ArrayList;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostsGroupsApiResponse extends ArrayList<PostsGroupApiResponse> {
}

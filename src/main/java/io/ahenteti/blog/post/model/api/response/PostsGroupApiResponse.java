package io.ahenteti.blog.post.model.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostsGroupApiResponse {
    private String name;
    private Collection<PostSummaryApiResponse> posts = new ArrayList<>();
}

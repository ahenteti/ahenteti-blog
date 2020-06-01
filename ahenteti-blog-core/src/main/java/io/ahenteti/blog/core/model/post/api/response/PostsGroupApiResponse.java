package io.ahenteti.blog.core.model.post.api.response;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PostsGroupApiResponse {
    private String name;
    private Collection<PostSummaryApiResponse> posts = new ArrayList<>();
}

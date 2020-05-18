package io.ahenteti.blog.model.api.post.request;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class GetPostsGroupsApiRequest {
    private List<String> groups = new ArrayList<>();
    private String groupBy;
}

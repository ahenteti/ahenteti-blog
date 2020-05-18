package io.ahenteti.blog.model.core.post;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PostsGroup {
    private String groupName;
    private Collection<PostSummary> posts = new ArrayList<>();
}

package io.ahenteti.blog.core.model.post.core;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PostsGroup {
    private String groupName;
    private Collection<PostSummary> posts = new ArrayList<>();
}

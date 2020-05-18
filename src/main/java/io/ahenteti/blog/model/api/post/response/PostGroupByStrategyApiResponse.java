package io.ahenteti.blog.model.api.post.response;

import lombok.Data;

import java.util.SortedSet;

@Data
public class PostGroupByStrategyApiResponse {
    private String name;
    private SortedSet<String> values;
}

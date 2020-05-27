package io.ahenteti.blog.post.model.api.response;

import lombok.Data;

import java.util.SortedSet;

@Data
public class PostGroupByStrategyApiResponse {
    private String name;
    private SortedSet<String> values;
}

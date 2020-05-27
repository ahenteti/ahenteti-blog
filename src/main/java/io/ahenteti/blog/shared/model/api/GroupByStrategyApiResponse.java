package io.ahenteti.blog.shared.model.api;

import lombok.Data;

import java.util.SortedSet;

@Data
public class GroupByStrategyApiResponse {
    private String name;
    private SortedSet<String> values;
}

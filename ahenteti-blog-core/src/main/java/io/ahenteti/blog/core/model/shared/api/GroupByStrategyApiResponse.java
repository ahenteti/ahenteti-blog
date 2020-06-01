package io.ahenteti.blog.core.model.shared.api;

import lombok.Data;

import java.util.SortedSet;

@Data
public class GroupByStrategyApiResponse {
    private String name;
    private SortedSet<String> values;
}

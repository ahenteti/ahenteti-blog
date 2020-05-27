package io.ahenteti.blog.post.model.core;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public enum EPostsGroupByStrategyName {
    CATEGORY("category"), AUTHOR("author");

    private String value;

    EPostsGroupByStrategyName(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EPostsGroupByStrategyName> map = new HashMap<>();

    static {
        for (EPostsGroupByStrategyName sortBy : EPostsGroupByStrategyName.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EPostsGroupByStrategyName getByValue(String sortBy) {
        return map.get(sortBy);
    }

    public static List<String> getAcceptedValues() {
        return Arrays.stream(EPostsGroupByStrategyName.values()).map(EPostsGroupByStrategyName::getValue)
                .collect(Collectors.toList());
    }
}

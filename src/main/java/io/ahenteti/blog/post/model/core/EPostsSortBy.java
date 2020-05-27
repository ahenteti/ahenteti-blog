package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.shared.model.core.ISortBy;

import java.util.HashMap;
import java.util.Map;

public enum EPostsSortBy implements ISortBy {
    CREATED_AT("CREATED_AT");

    private String value;

    EPostsSortBy(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EPostsSortBy> map = new HashMap<>();

    static {
        for (EPostsSortBy sortBy : EPostsSortBy.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EPostsSortBy getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

package io.ahenteti.blog.model.core.post;

import io.ahenteti.blog.model.core.ISortBy;

import java.util.HashMap;
import java.util.Map;

public enum EPostsSortBy implements ISortBy {
    CREATED_AT("createdAt");

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

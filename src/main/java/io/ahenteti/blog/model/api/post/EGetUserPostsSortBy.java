package io.ahenteti.blog.model.api.post;

import java.util.HashMap;
import java.util.Map;

public enum EGetUserPostsSortBy implements ISortBy {
    CREATED_AT("createdAt");

    private String value;

    EGetUserPostsSortBy(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EGetUserPostsSortBy> map = new HashMap<>();

    static {
        for (EGetUserPostsSortBy sortBy : EGetUserPostsSortBy.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EGetUserPostsSortBy getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

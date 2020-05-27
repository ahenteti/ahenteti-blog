package io.ahenteti.blog.postcomments.model.core;

import io.ahenteti.blog.shared.model.core.ISortBy;

import java.util.HashMap;
import java.util.Map;

public enum EPostCommentsSortBy implements ISortBy {
    CREATED_AT("createdAt");

    private String value;

    EPostCommentsSortBy(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EPostCommentsSortBy> map = new HashMap<>();

    static {
        for (EPostCommentsSortBy sortBy : EPostCommentsSortBy.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EPostCommentsSortBy getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

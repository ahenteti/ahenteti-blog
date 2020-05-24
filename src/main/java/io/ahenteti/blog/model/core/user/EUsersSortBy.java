package io.ahenteti.blog.model.core.user;

import io.ahenteti.blog.model.core.ISortBy;

import java.util.HashMap;
import java.util.Map;

public enum EUsersSortBy implements ISortBy {
    JOIN_AT("JOIN_AT"), USERNAME("USERNAME");

    private String value;

    EUsersSortBy(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EUsersSortBy> map = new HashMap<>();

    static {
        for (EUsersSortBy sortBy : EUsersSortBy.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EUsersSortBy getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

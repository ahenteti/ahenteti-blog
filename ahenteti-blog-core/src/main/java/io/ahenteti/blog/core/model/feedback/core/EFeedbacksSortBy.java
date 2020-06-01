package io.ahenteti.blog.core.model.feedback.core;

import io.ahenteti.blog.core.model.shared.core.ISortBy;

import java.util.HashMap;
import java.util.Map;

public enum EFeedbacksSortBy implements ISortBy {
    CREATED_AT("CREATED_AT");

    private String value;

    EFeedbacksSortBy(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static final Map<String, EFeedbacksSortBy> map = new HashMap<>();

    static {
        for (EFeedbacksSortBy sortBy : EFeedbacksSortBy.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static EFeedbacksSortBy getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

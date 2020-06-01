package io.ahenteti.blog.core.model.shared.core;


import org.springframework.data.domain.Sort;

import java.util.HashMap;
import java.util.Map;

public enum ESortDirection {
    ASC("asc", Sort.Direction.ASC), DESC("desc", Sort.Direction.DESC);

    private String value;
    private Sort.Direction springDataDirection;

    ESortDirection(String value, Sort.Direction springDataDirection) {
        this.value = value;
        this.springDataDirection = springDataDirection;
    }

    public String getValue() {
        return value;
    }

    public Sort.Direction getSpringDataDirection() {
        return springDataDirection;
    }

    private static final Map<String, ESortDirection> map = new HashMap<>();

    static {
        for (ESortDirection sortBy : ESortDirection.values()) {
            map.put(sortBy.value, sortBy);
        }
    }

    public static ESortDirection getByValue(String sortBy) {
        return map.get(sortBy);
    }
}

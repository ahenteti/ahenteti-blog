package io.ahenteti.blog.core.model.user.core;

import io.ahenteti.blog.core.exception.InvalidObjectStateException;

import java.util.HashMap;
import java.util.Map;

public enum EUserRole {

    USER("USER"), ADMIN("ADMIN");

    private String value;

    EUserRole(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    private static Map<String, EUserRole> map = new HashMap<>();

    static {
        for (EUserRole role : EUserRole.values()) {
            map.put(role.getValue(), role);
        }
    }

    public static EUserRole from(String value) {
        EUserRole res = map.get(value);
        if (res == null) {
            throw new InvalidObjectStateException("unknown role name: " + value);
        }
        return res;
    }
}

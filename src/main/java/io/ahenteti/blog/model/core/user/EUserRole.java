package io.ahenteti.blog.model.core.user;

import io.ahenteti.blog.exception.InvalidApplicationStateException;

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
            throw new InvalidApplicationStateException("unknown role name: " + value);
        }
        return res;
    }
}
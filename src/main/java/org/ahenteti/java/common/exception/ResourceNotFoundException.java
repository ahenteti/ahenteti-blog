package org.ahenteti.java.common.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String resourceId) {
        super("Resource not found: " + resourceId);
    }
}

package org.ahenteti.java.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String resourceId) {
        super("Resource not found: " + resourceId);
    }
}

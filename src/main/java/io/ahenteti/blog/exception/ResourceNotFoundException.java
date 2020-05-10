package io.ahenteti.blog.exception;

import java.util.function.Supplier;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public static Supplier<ResourceNotFoundException> throwPostNotFoundException(Long id) {
        return () -> new ResourceNotFoundException("Post with id " + id + " not found");
    }
}

package io.ahenteti.blog.core.exception;

import java.util.function.Supplier;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public static Supplier<ResourceNotFoundException> throwPostNotFoundException(String slug) {
        return () -> new ResourceNotFoundException("Post with slug " + slug + " not found");
    }
}

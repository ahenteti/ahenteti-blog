package io.ahenteti.blog.core.exception;

import io.ahenteti.blog.core.model.post.entity.PostEntity;

import java.util.function.Consumer;

public class AlreadyExistsResourceException extends RuntimeException {

    public AlreadyExistsResourceException(String message) {
        super(message);
    }

    public static Consumer<PostEntity> throwAlreadyExistsException(String slug) {
        return (post) -> {
            throw new AlreadyExistsResourceException("post with slug " + slug + " already exists");
        };
    }
}

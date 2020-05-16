package io.ahenteti.blog.model.core.post;

import io.ahenteti.blog.exception.ResourceNotFoundException;
import io.ahenteti.blog.model.entity.PostEntity;
import lombok.Data;

import java.time.Instant;
import java.util.Objects;

@Data
public class ReadyToUpdatePost extends Post {

    private PostEntity entity;

    @Override
    public Long getId() {
        requireIdNotNull();
        return super.getId();
    }

    @Override
    public void setId(Long id) {
        requireIdNotNull();
        super.setId(id);
    }

    public Instant getLastUpdatedAtValue() {
        return getLastUpdatedAt().orElseThrow(() -> new IllegalStateException("the lastUpdatedAt attribute must not be null on a ReadyToUpdatePost post"));
    }

    private void requireIdNotNull() {
        Objects.requireNonNull(this.id, "the id attribute must not be null on a ReadyToUpdatePost post");
    }
}

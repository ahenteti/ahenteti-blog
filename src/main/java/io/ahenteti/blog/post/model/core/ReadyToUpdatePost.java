package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.post.model.entity.PostEntity;
import lombok.Data;

import java.time.Instant;

@Data
public class ReadyToUpdatePost extends Post {

    private PostEntity entity;

    @Override
    public Long getId() {
        if (this.id == null) {
            throw new IllegalStateException("the id attribute must not be null on a ReadyToUpdatePost post");
        }
        return super.getId();
    }

    public Instant getLastUpdatedAtValue() {
        return getLastUpdatedAt()
                .orElseThrow(() -> new IllegalStateException("the lastUpdatedAt attribute must not be null on a ReadyToUpdatePost post"));
    }

}

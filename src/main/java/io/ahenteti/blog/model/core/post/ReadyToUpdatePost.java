package io.ahenteti.blog.model.core.post;

import io.ahenteti.blog.model.entity.PostEntity;
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

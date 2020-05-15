package io.ahenteti.blog.model.core.post;

import lombok.Data;

import java.util.Objects;

@Data
public class ReadyToUpdatePost extends Post {

    @Override
    public Long getId() {
        requireNotNull();
        return super.getId();
    }

    @Override
    public void setId(Long id) {
        requireNotNull();
        super.setId(id);
    }

    private void requireNotNull() {
        Objects.requireNonNull(this.id, "the id of readyToUpdate post must not be null");
    }
}

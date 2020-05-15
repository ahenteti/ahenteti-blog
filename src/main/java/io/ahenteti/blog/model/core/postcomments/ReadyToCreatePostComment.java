package io.ahenteti.blog.model.core.postcomments;

import lombok.Data;

@Data
public class ReadyToCreatePostComment extends PostComment {
    @Override
    public Long getId() {
        return null;
    }
}

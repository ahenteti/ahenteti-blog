package io.ahenteti.blog.postcomments.model.core;

import lombok.Data;

@Data
public class ReadyToCreatePostComment extends PostComment {
    @Override
    public Long getId() {
        return null;
    }
}

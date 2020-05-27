package io.ahenteti.blog.post.model.core;

import lombok.Data;

@Data
public class ReadyToCreatePost extends Post {

    @Override
    public Long getId() {
        return null;
    }
}

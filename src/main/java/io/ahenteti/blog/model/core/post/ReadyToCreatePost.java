package io.ahenteti.blog.model.core.post;

import lombok.Data;

@Data
public class ReadyToCreatePost extends Post {

    @Override
    public Long getId() {
        return null;
    }
}

package io.ahenteti.blog.model.api;

import io.ahenteti.blog.model.core.IUser;
import lombok.Data;

@Data
public class GetUserPostsApiRequest {
    private IUser user;
    private Integer page;
    private Integer size;
}

package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class GetUserPostsApiRequest {
    private IUser user;
    private Integer page;
    private Integer size;
}

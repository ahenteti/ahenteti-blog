package io.ahenteti.blog.model.api;

import io.ahenteti.blog.model.core.IUser;
import lombok.Data;

@Data
public class GetUserPostsApiRequest {
    private String usernameRequestParam;
    private IUser currentSecurityUser;
    private Integer page;
    private Integer size;
}

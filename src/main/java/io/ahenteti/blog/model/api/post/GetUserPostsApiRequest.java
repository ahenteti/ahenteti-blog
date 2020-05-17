package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class GetUserPostsApiRequest extends PageApiRequest {
    private IUser user;
}

package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class DeletePostApiRequest {
    private IUser user;
    private Long postId;
}
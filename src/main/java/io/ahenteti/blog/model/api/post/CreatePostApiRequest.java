package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class CreatePostApiRequest extends CreatePostApiRequestBody {
    protected IUser author;
}

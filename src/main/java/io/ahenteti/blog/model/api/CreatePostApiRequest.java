package io.ahenteti.blog.model.api;

import io.ahenteti.blog.model.core.IUser;
import lombok.Data;

@Data
public class CreatePostApiRequest extends CreatePostApiRequestBody {
    private IUser author;
}

package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class UpdatePostApiRequest extends UpdatePostApiRequestBody {
    protected Long id;
    protected IUser author;
}

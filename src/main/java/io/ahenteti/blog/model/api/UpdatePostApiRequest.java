package io.ahenteti.blog.model.api;

import io.ahenteti.blog.model.core.IUser;
import lombok.Data;

@Data
public class UpdatePostApiRequest extends UpdatePostApiRequestBody {
    private Long id;
    private IUser author;
}

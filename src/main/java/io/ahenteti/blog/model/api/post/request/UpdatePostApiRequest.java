package io.ahenteti.blog.model.api.post.request;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class UpdatePostApiRequest extends UpdatePostApiRequestBody {
    protected Long id;
    protected IOAuth2User author;
}

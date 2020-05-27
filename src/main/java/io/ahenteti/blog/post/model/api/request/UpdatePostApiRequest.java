package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class UpdatePostApiRequest extends UpdatePostApiRequestBody {
    protected Long id;
    protected IOAuth2User author;
}

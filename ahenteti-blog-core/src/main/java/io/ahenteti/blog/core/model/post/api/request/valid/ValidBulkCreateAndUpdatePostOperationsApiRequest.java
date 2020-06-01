package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.UserPostsToCreateOrUpdateApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidBulkCreateAndUpdatePostOperationsApiRequest {
    private IOAuth2User user;
    private UserPostsToCreateOrUpdateApiRequest posts;
}

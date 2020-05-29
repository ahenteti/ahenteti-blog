package io.ahenteti.blog.post.model.api.request.valid;

import io.ahenteti.blog.post.model.api.request.UserPostsToCreateOrUpdateApiRequest;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidBulkCreateAndUpdatePostOperationsApiRequest {
    private IOAuth2User user;
    private UserPostsToCreateOrUpdateApiRequest posts;
}

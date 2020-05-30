package io.ahenteti.blog.user.model.api;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidDeleteUserApiRequest {
    private Long userId;

    public ValidDeleteUserApiRequest(DeleteUserApiRequest request) {
        this.userId = request.getUserIdToDelete();
    }
}

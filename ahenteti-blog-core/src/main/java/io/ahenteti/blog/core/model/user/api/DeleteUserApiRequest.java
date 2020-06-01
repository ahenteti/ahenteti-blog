package io.ahenteti.blog.core.model.user.api;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class DeleteUserApiRequest {
    private IOAuth2User user;
    private Long userIdToDelete;

    public DeleteUserApiRequest(IOAuth2User user, Long userIdToDelete) {
        this.user = user;
        this.userIdToDelete = userIdToDelete;
    }
}

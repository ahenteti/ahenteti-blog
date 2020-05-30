package io.ahenteti.blog.user.model.api;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
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

package io.ahenteti.blog.core.model.user.api;

import lombok.Data;

@Data
public class ValidDeleteUserApiRequest {
    private Long userId;

    public ValidDeleteUserApiRequest(DeleteUserApiRequest request) {
        this.userId = request.getUserIdToDelete();
    }
}

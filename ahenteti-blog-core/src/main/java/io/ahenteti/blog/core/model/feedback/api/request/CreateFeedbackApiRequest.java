package io.ahenteti.blog.core.model.feedback.api.request;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreateFeedbackApiRequest {
    private IOAuth2User author;
    private CreateFeedbackApiRequestBody body;
}

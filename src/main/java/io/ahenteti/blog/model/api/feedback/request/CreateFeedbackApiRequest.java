package io.ahenteti.blog.model.api.feedback.request;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreateFeedbackApiRequest {
    private IOAuth2User author;
    private CreateFeedbackApiRequestBody body;
}

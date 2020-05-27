package io.ahenteti.blog.feedback.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreateFeedbackApiRequest {
    private IOAuth2User author;
    private CreateFeedbackApiRequestBody body;
}

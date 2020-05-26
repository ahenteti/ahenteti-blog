package io.ahenteti.blog.model.api.feedback.request.valid;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidCreateFeedbackApiRequest {
    private IOAuth2User author;
    private ValidCreateFeedbackApiRequestBody body;

    public ValidCreateFeedbackApiRequest(IOAuth2User author, ValidCreateFeedbackApiRequestBody body) {
        this.author = author;
        this.body = body;
    }

}

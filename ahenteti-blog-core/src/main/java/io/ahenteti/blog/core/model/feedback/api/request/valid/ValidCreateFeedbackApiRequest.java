package io.ahenteti.blog.core.model.feedback.api.request.valid;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
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

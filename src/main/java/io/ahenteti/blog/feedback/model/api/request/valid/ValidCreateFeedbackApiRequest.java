package io.ahenteti.blog.feedback.model.api.request.valid;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
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

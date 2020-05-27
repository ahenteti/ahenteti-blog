package io.ahenteti.blog.feedback.model.api.request.valid;

import io.ahenteti.blog.feedback.model.api.request.CreateFeedbackApiRequestBody;
import lombok.Data;

@Data
public class ValidCreateFeedbackApiRequestBody {
    private String value;

    public ValidCreateFeedbackApiRequestBody(CreateFeedbackApiRequestBody requestBody) {
        this.value = requestBody.getValue();
    }
}

package io.ahenteti.blog.model.api.feedback.request.valid;

import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequestBody;
import lombok.Data;

@Data
public class ValidCreateFeedbackApiRequestBody {
    private String value;

    public ValidCreateFeedbackApiRequestBody(CreateFeedbackApiRequestBody requestBody) {
        this.value = requestBody.getValue();
    }
}

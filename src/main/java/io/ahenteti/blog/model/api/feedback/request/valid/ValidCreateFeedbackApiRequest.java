package io.ahenteti.blog.model.api.feedback.request.valid;

import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequest;
import lombok.Data;

@Data
public class ValidCreateFeedbackApiRequest extends CreateFeedbackApiRequest {

    public ValidCreateFeedbackApiRequest(CreateFeedbackApiRequest request) {
        this.author = request.getAuthor();
        this.value = request.getValue();
    }
}

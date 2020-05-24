package io.ahenteti.blog.model.api.feedback;

import lombok.Data;

@Data
public class ValidCreateFeedbackApiRequest extends CreateFeedbackApiRequest {

    public ValidCreateFeedbackApiRequest(CreateFeedbackApiRequest request) {
        this.author = request.author;
        this.value = request.value;
    }
}

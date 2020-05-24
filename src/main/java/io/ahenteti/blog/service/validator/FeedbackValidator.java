package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.feedback.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.ValidCreateFeedbackApiRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackValidator {

    private UserValidator userValidator;

    @Autowired
    public FeedbackValidator(UserValidator userValidator) {
        this.userValidator = userValidator;
    }

    public ValidCreateFeedbackApiRequest validateCreateFeedbackApiRequest(CreateFeedbackApiRequest request) {
        this.userValidator.validateUser(request.getAuthor());
        validateValue(request.getValue());
        return new ValidCreateFeedbackApiRequest(request);
    }

    private void validateValue(String value) {
        if (StringUtils.isBlank(value)) {
            throw new MissingMandatoryRequestAttributeException("feedback value is mandatory");
        }
    }
}

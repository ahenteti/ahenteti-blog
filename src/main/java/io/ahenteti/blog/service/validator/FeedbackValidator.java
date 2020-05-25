package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidGetFeedbacksApiRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackValidator {

    private UserValidator userValidator;
    private PageApiRequestValidator pageApiRequestValidator;

    @Autowired
    public FeedbackValidator(UserValidator userValidator, PageApiRequestValidator pageApiRequestValidator) {
        this.userValidator = userValidator;
        this.pageApiRequestValidator = pageApiRequestValidator;
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

    public ValidGetFeedbacksApiRequest validateGetFeedbacksApiRequest(GetFeedbacksApiRequest request) {
        userValidator.validateAdminUser(request.getUser());
        pageApiRequestValidator.validatePageApiRequest(request);
        return new ValidGetFeedbacksApiRequest(request);
    }
}

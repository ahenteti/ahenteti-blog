package io.ahenteti.blog.feedback.service;

import io.ahenteti.blog.feedback.FeedbackConfig;
import io.ahenteti.blog.feedback.model.api.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.feedback.model.api.request.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.feedback.model.api.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.feedback.model.api.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.feedback.model.api.request.valid.ValidCreateFeedbackApiRequestBody;
import io.ahenteti.blog.feedback.model.api.request.valid.ValidGetFeedbacksApiRequest;
import io.ahenteti.blog.feedback.model.core.FeedbackToCreate;
import io.ahenteti.blog.feedback.model.core.ValidFeedbackToCreate;
import io.ahenteti.blog.shared.service.PageApiRequestValidator;
import io.ahenteti.blog.user.model.entity.UserEntity;
import io.ahenteti.blog.user.service.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static io.ahenteti.blog.shared.utils.InstantValidatorUtils.validateInThePast;
import static io.ahenteti.blog.shared.utils.ObjectValidatorUtils.validateNotNull;
import static io.ahenteti.blog.shared.utils.StringValidatorUtils.validateMaxLength;
import static io.ahenteti.blog.shared.utils.StringValidatorUtils.validateNotBlank;

@Service
public class FeedbackValidator {

    private UserValidator userValidator;
    private PageApiRequestValidator pageApiRequestValidator;
    private FeedbackConfig feedbackConfig;

    @Autowired
    public FeedbackValidator(UserValidator userValidator, PageApiRequestValidator pageApiRequestValidator, FeedbackConfig feedbackConfig) {
        this.userValidator = userValidator;
        this.pageApiRequestValidator = pageApiRequestValidator;
        this.feedbackConfig = feedbackConfig;
    }

    public ValidCreateFeedbackApiRequest validate(CreateFeedbackApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        ValidCreateFeedbackApiRequestBody validRequestBody = validate(request.getBody());
        return new ValidCreateFeedbackApiRequest(request.getAuthor(), validRequestBody);
    }

    public ValidGetFeedbacksApiRequest validate(GetFeedbacksApiRequest request) {
        userValidator.validateAdminUser(request.getUser());
        pageApiRequestValidator.validate(request);
        return new ValidGetFeedbacksApiRequest(request);
    }

    public ValidFeedbackToCreate validate(FeedbackToCreate feedback) {
        // @formatter:off
        UserEntity author = validateAuthor(feedback);
        validateValue(feedback);
        validateCreatedAt(feedback);
        return new ValidFeedbackToCreate(feedback, author);
        // @formatter:on
    }

    private void validateCreatedAt(FeedbackToCreate feedback) {
        validateNotNull("Feedback.createdAt", feedback.getCreatedAt());
        validateInThePast("Feedback.createdAt", feedback.getCreatedAt());
    }

    private void validateValue(FeedbackToCreate feedback) {
        validateNotBlank("Feedback.value", feedback.getValue());
        validateMaxLength("Feedback.value", feedback.getValue(), feedbackConfig.getMaxValueLength());
    }

    private UserEntity validateAuthor(FeedbackToCreate feedback) {
        validateNotNull("Feedback.author", feedback.getAuthor());
        validateNotNull("Feedback.Author.id", feedback.getAuthor().getId());
        return userValidator.validate(feedback.getAuthor());
    }

    private ValidCreateFeedbackApiRequestBody validate(CreateFeedbackApiRequestBody requestBody) {
        validateNotNull("CreateFeedbackApiRequest.body", requestBody);
        validateNotBlank("CreateFeedbackApiRequest.Body.value", requestBody.getValue());
        return new ValidCreateFeedbackApiRequestBody(requestBody);
    }
}

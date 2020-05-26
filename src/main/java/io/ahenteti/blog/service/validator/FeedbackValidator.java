package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.config.FeedbackConfig;
import io.ahenteti.blog.exception.InvalidObjectStateException;
import io.ahenteti.blog.exception.InvalidRequirementException;
import io.ahenteti.blog.exception.ResourceNotFoundException;
import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidCreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidGetFeedbacksApiRequest;
import io.ahenteti.blog.model.core.feedback.FeedbackToCreate;
import io.ahenteti.blog.model.core.feedback.ValidFeedbackToCreate;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class FeedbackValidator {

    private UserValidator userValidator;
    private UserRepository userRepository;
    private PageApiRequestValidator pageApiRequestValidator;
    private FeedbackConfig feedbackConfig;

    @Autowired
    public FeedbackValidator(UserValidator userValidator, UserRepository userRepository, PageApiRequestValidator pageApiRequestValidator, FeedbackConfig feedbackConfig) {
        this.userValidator = userValidator;
        this.userRepository = userRepository;
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
        pageApiRequestValidator.validatePageApiRequest(request);
        return new ValidGetFeedbacksApiRequest(request);
    }

    public ValidFeedbackToCreate validate(FeedbackToCreate feedback) {
        // @formatter:off
        if (feedback.getAuthor() == null || feedback.getAuthor().getId() == null) {
            throw new InvalidObjectStateException("Feedback.author is mandatory");
        }
        Long authorId = feedback.getAuthor().getId();
        UserEntity author = userRepository.findById(authorId).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + authorId));
        if (StringUtils.isBlank(feedback.getValue())) {
            throw new InvalidRequirementException("Feedback.value is mandatory");
        }
        if (StringUtils.length(feedback.getValue()) > feedbackConfig.getMaxValueLength()) {
            throw new InvalidRequirementException("Current feedback value length is greater than the authorized maxValueLength. Current Feedback value length: " + feedback.getValue().length() + ", maxValueLength: " + feedbackConfig.getMaxValueLength());
        }
        if (feedback.getCreatedAt() == null) {
            throw new InvalidRequirementException("Feedback.createdAt is mandatory");
        }
        if (feedback.getCreatedAt().isAfter(Instant.now())) {
            throw new InvalidRequirementException("Feedback.createdAt must be in the past");
        }
        return new ValidFeedbackToCreate(feedback, author);
        // @formatter:on
    }

    private ValidCreateFeedbackApiRequestBody validate(CreateFeedbackApiRequestBody requestBody) {
        if (requestBody == null) {
            throw new InvalidRequirementException("CreateFeedbackApiRequest.body is mandatory");
        }
        if (StringUtils.isBlank(requestBody.getValue())) {
            throw new InvalidRequirementException("CreateFeedbackApiRequestBody.value is mandatory");
        }
        return new ValidCreateFeedbackApiRequestBody(requestBody);
    }
}

package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.feedback.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.converter.FeedbackConverter;
import io.ahenteti.blog.service.dao.FeedbackDao;
import io.ahenteti.blog.service.validator.FeedbackValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeedbackController {

    private FeedbackDao feedbackDao;
    private FeedbackConverter feedbackConverter;
    private FeedbackValidator feedbackValidator;

    @Autowired
    public FeedbackController(FeedbackDao feedbackDao, FeedbackConverter feedbackConverter, FeedbackValidator feedbackValidator) {
        this.feedbackDao = feedbackDao;
        this.feedbackConverter = feedbackConverter;
        this.feedbackValidator = feedbackValidator;
    }

    @Transactional
    @PostMapping("/secure-api/feedbacks")
    @ResponseStatus(HttpStatus.CREATED)
    public void createFeedback(@ModelAttribute IOAuth2User user, @RequestBody CreateFeedbackApiRequestBody requestBody) {
        CreateFeedbackApiRequest request = feedbackConverter.toCreateFeedbackApiRequest(user, requestBody);
        ValidCreateFeedbackApiRequest validRequest = feedbackValidator.validateCreateFeedbackApiRequest(request);
        ReadyToCreateFeedback feedback = feedbackConverter.toFeedback(validRequest);
        feedbackDao.createFeedback(feedback);
    }

}

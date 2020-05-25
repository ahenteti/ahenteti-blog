package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidGetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.response.FeedbacksPageApiResponse;
import io.ahenteti.blog.model.core.feedback.FeedbacksPage;
import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.converter.FeedbackConverter;
import io.ahenteti.blog.service.dao.FeedbackDao;
import io.ahenteti.blog.service.validator.FeedbackValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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

    // @formatter:off
    @GetMapping("/secure-api/feedbacks")
    public FeedbacksPageApiResponse getFeedbacks(
            @ModelAttribute IOAuth2User user,
            @RequestParam String filter,
            @RequestParam Integer page,
            @RequestParam Integer size,
            @RequestParam(required = false, defaultValue = "CREATED_AT") String sortBy,
            @RequestParam(required = false, defaultValue = "asc") String sortDirection) {
        GetFeedbacksApiRequest request = feedbackConverter.toGetFeedbacksApiRequest(user, filter, page, size, sortBy, sortDirection);
        ValidGetFeedbacksApiRequest validRequest = feedbackValidator.validateGetFeedbacksApiRequest(request);
        FeedbacksPage feedbacksPage = feedbackDao.getFeedbacks(validRequest);
        return feedbackConverter.toFeedbacksPageApiResponse(feedbacksPage);
    }
    // @formatter:on

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

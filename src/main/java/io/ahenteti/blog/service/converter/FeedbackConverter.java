package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.request.valid.ValidGetFeedbacksApiRequest;
import io.ahenteti.blog.model.api.feedback.response.FeedbackApiResponse;
import io.ahenteti.blog.model.api.feedback.response.FeedbacksPageApiResponse;
import io.ahenteti.blog.model.core.feedback.Feedback;
import io.ahenteti.blog.model.core.feedback.FeedbacksPage;
import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.core.post.PostsPage;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.FeedbackEntity;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class FeedbackConverter {

    private final UserRepository userRepository;
    private final UserConverter userConverter;

    @Autowired
    public FeedbackConverter(UserRepository userRepository, UserConverter userConverter) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
    }

    public FeedbackEntity toFeedbackEntity(ReadyToCreateFeedback feedback) {
        FeedbackEntity res = new FeedbackEntity();
        res.setValue(feedback.getValue());
        res.setCreatedAt(feedback.getCreatedAt());
        res.setAuthor(this.userRepository.getOne(feedback.getAuthor().getId()));
        return res;
    }

    public CreateFeedbackApiRequest toCreateFeedbackApiRequest(IOAuth2User user, CreateFeedbackApiRequestBody requestBody) {
        CreateFeedbackApiRequest res = new CreateFeedbackApiRequest();
        res.setValue(requestBody.getValue());
        res.setAuthor(user);
        return res;
    }

    public ReadyToCreateFeedback toFeedback(ValidCreateFeedbackApiRequest request) {
        ReadyToCreateFeedback res = new ReadyToCreateFeedback();
        res.setValue(request.getValue());
        res.setCreatedAt(Instant.now());
        res.setAuthor(this.userConverter.toUser(request.getAuthor()));
        return res;
    }
    
    public FeedbackApiResponse toFeedbackApiResponse(Feedback feedback) {
        FeedbackApiResponse res = new FeedbackApiResponse();
        res.setValue(feedback.getValue());
        res.setCreatedAt(feedback.getCreatedAt());
        res.setAuthor(userConverter.toAuthorApiResponse(feedback.getAuthor()));
        return res;
    }

    public GetFeedbacksApiRequest toGetFeedbacksApiRequest(IOAuth2User user, String filter, Integer page, Integer size, String sortBy, String sortDirection) {
        GetFeedbacksApiRequest res = new GetFeedbacksApiRequest();
        res.setUser(user);
        res.setFilter(filter);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        return res;
    }
    
    public Feedback toFeedback(FeedbackEntity entity) {
        Feedback res = new Feedback();
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        return res;
    }

    public FeedbacksPage toFeedbacksPage(Page<FeedbackEntity> feedbacks, ValidGetFeedbacksApiRequest request) {
        FeedbacksPage res = new FeedbacksPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(feedbacks.getTotalElements());
        res.setItems(feedbacks.getContent().stream().map(this::toFeedback).collect(Collectors.toList()));
        return res;
    }

    public FeedbacksPageApiResponse toFeedbacksPageApiResponse(FeedbacksPage feedbacksPage) {
        FeedbacksPageApiResponse res = new FeedbacksPageApiResponse();
        res.setPage(feedbacksPage.getPage());
        res.setSize(feedbacksPage.getSize());
        res.setTotalItems(feedbacksPage.getTotalItems());
        res.setItems(feedbacksPage.getItems().stream().map(this::toFeedbackApiResponse).collect(Collectors.toList()));
        return res;
    }
}

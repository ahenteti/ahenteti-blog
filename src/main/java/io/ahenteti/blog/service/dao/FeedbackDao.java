package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.feedback.request.valid.ValidGetFeedbacksApiRequest;
import io.ahenteti.blog.model.core.feedback.FeedbacksPage;
import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.entity.FeedbackEntity;
import io.ahenteti.blog.service.converter.FeedbackConverter;
import io.ahenteti.blog.service.converter.PageConverter;
import io.ahenteti.blog.service.dao.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class FeedbackDao {

    private FeedbackConverter feedbackConverter;
    private FeedbackRepository feedbackRepository;
    private PageConverter pageConverter;

    @Autowired
    public FeedbackDao(FeedbackConverter feedbackConverter, FeedbackRepository feedbackRepository, PageConverter pageConverter) {
        this.feedbackConverter = feedbackConverter;
        this.feedbackRepository = feedbackRepository;
        this.pageConverter = pageConverter;
    }

    public FeedbackEntity createFeedback(ReadyToCreateFeedback feedback) {
        FeedbackEntity entity = feedbackConverter.toFeedbackEntity(feedback);
        return feedbackRepository.save(entity);
    }

    public FeedbacksPage getFeedbacks(ValidGetFeedbacksApiRequest request) {
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<FeedbackEntity> feedbacks = feedbackRepository.find(request.getSqlFilter(), pageRequest);
        return feedbackConverter.toFeedbacksPage(feedbacks, request);
    }
}

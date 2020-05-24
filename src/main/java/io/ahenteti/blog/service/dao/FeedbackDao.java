package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.entity.FeedbackEntity;
import io.ahenteti.blog.service.converter.FeedbackConverter;
import io.ahenteti.blog.service.dao.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackDao {

    private FeedbackConverter feedbackConverter;
    private FeedbackRepository feedbackRepository;

    @Autowired
    public FeedbackDao(FeedbackConverter feedbackConverter, FeedbackRepository feedbackRepository) {
        this.feedbackConverter = feedbackConverter;
        this.feedbackRepository = feedbackRepository;
    }

    public FeedbackEntity createFeedback(ReadyToCreateFeedback feedback) {
        FeedbackEntity entity = feedbackConverter.toFeedbackEntity(feedback);
        return feedbackRepository.save(entity);
    }
}

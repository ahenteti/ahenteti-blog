package io.ahenteti.blog.feedback.service;

import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.feedback.model.core.FeedbacksPage;
import io.ahenteti.blog.feedback.model.core.ValidFeedbackToCreate;
import io.ahenteti.blog.feedback.model.entity.FeedbackEntity;
import io.ahenteti.blog.shared.service.PageConverter;
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

    public FeedbackEntity create(ValidFeedbackToCreate feedback) {
        FeedbackEntity entity = feedbackConverter.toEntity(feedback);
        return feedbackRepository.save(entity);
    }

    public FeedbacksPage getPage(ValidPageApiRequest request) {
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<FeedbackEntity> page = feedbackRepository.find(request.getSqlFilter(), pageRequest);
        return feedbackConverter.toPage(page, request);
    }
}
package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.feedback.CreateFeedbackApiRequest;
import io.ahenteti.blog.model.api.feedback.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.model.api.feedback.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.model.core.feedback.ReadyToCreateFeedback;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.FeedbackEntity;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

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
}

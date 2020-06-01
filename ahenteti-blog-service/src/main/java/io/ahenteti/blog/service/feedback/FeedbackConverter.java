package io.ahenteti.blog.service.feedback;

import io.ahenteti.blog.core.model.feedback.api.request.CreateFeedbackApiRequest;
import io.ahenteti.blog.core.model.feedback.api.request.CreateFeedbackApiRequestBody;
import io.ahenteti.blog.core.model.feedback.api.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.core.model.feedback.api.request.valid.ValidCreateFeedbackApiRequest;
import io.ahenteti.blog.core.model.feedback.api.response.FeedbackApiResponse;
import io.ahenteti.blog.core.model.feedback.api.response.FeedbacksPageApiResponse;
import io.ahenteti.blog.core.model.feedback.core.Feedback;
import io.ahenteti.blog.core.model.feedback.core.FeedbackToCreate;
import io.ahenteti.blog.core.model.feedback.core.FeedbacksPage;
import io.ahenteti.blog.core.model.feedback.core.ValidFeedbackToCreate;
import io.ahenteti.blog.core.model.feedback.entity.FeedbackEntity;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.user.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.stream.Collectors;

@Service
public class FeedbackConverter {

    private final UserConverter userConverter;

    @Autowired
    public FeedbackConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public CreateFeedbackApiRequest toApiRequest(IOAuth2User user, CreateFeedbackApiRequestBody requestBody) {
        CreateFeedbackApiRequest res = new CreateFeedbackApiRequest();
        res.setAuthor(user);
        CreateFeedbackApiRequestBody body = new CreateFeedbackApiRequestBody();
        body.setValue(requestBody.getValue());
        res.setBody(body);
        return res;
    }

    public FeedbackToCreate toModel(ValidCreateFeedbackApiRequest request) {
        FeedbackToCreate res = new FeedbackToCreate();
        res.setValue(request.getBody().getValue());
        res.setCreatedAt(Instant.now());
        res.setAuthor(this.userConverter.toUser(request.getAuthor()));
        return res;
    }

    public FeedbackApiResponse toApiResponse(Feedback feedback) {
        FeedbackApiResponse res = new FeedbackApiResponse();
        res.setValue(feedback.getValue());
        res.setCreatedAtIso8601(feedback.getCreatedAt().toString());
        res.setAuthor(userConverter.toAuthorApiResponse(feedback.getAuthor()));
        return res;
    }

    public GetFeedbacksApiRequest toApiRequest(IOAuth2User user, String filter, Integer page, Integer size, String sortBy, String sortDirection) {
        GetFeedbacksApiRequest res = new GetFeedbacksApiRequest();
        res.setUser(user);
        res.setFilter(filter);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        return res;
    }

    public Feedback toModel(FeedbackEntity entity) {
        Feedback res = new Feedback();
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        return res;
    }

    public FeedbacksPage toPage(Page<FeedbackEntity> page, ValidPageApiRequest request) {
        FeedbacksPage res = new FeedbacksPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(page.getTotalElements());
        res.setItems(page.getContent().stream().map(this::toModel).collect(Collectors.toList()));
        return res;
    }

    public FeedbacksPageApiResponse toApiResponse(FeedbacksPage feedbacksPage) {
        FeedbacksPageApiResponse res = new FeedbacksPageApiResponse();
        res.setPage(feedbacksPage.getPage());
        res.setSize(feedbacksPage.getSize());
        res.setTotalItems(feedbacksPage.getTotalItems());
        res.setItems(feedbacksPage.getItems().stream().map(this::toApiResponse).collect(Collectors.toList()));
        return res;
    }

    public FeedbackEntity toEntity(ValidFeedbackToCreate feedback) {
        FeedbackEntity res = new FeedbackEntity();
        res.setValue(feedback.getValue());
        res.setCreatedAt(feedback.getCreatedAt());
        res.setAuthor(feedback.getAuthor());
        return res;
    }
}

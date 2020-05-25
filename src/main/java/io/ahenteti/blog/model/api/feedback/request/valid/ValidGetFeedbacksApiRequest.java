package io.ahenteti.blog.model.api.feedback.request.valid;

import io.ahenteti.blog.model.api.ValidPageApiRequest;
import io.ahenteti.blog.model.api.feedback.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.model.core.feedback.EFeedbacksSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetFeedbacksApiRequest extends ValidPageApiRequest<EFeedbacksSortBy> {

    private IOAuth2User user;

    public ValidGetFeedbacksApiRequest(GetFeedbacksApiRequest request) {
        super(request, EFeedbacksSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

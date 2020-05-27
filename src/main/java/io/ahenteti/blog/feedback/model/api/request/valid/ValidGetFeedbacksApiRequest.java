package io.ahenteti.blog.feedback.model.api.request.valid;

import io.ahenteti.blog.feedback.model.api.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.feedback.model.core.EFeedbacksSortBy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetFeedbacksApiRequest extends ValidPageApiRequest<EFeedbacksSortBy> {

    private IOAuth2User user;

    public ValidGetFeedbacksApiRequest(GetFeedbacksApiRequest request) {
        super(request, EFeedbacksSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

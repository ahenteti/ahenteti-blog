package io.ahenteti.blog.core.model.feedback.api.request.valid;

import io.ahenteti.blog.core.model.feedback.api.request.GetFeedbacksApiRequest;
import io.ahenteti.blog.core.model.feedback.core.EFeedbacksSortBy;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetFeedbacksApiRequest extends ValidPageApiRequest<EFeedbacksSortBy> {

    private IOAuth2User user;

    public ValidGetFeedbacksApiRequest(GetFeedbacksApiRequest request) {
        super(request, EFeedbacksSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

package io.ahenteti.blog.core.model.feedback.api.request;

import io.ahenteti.blog.core.model.feedback.core.EFeedbacksSortBy;
import io.ahenteti.blog.core.model.shared.api.PageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetFeedbacksApiRequest extends PageApiRequest {
    private IOAuth2User user;

    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EFeedbacksSortBy.values()).map(EFeedbacksSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

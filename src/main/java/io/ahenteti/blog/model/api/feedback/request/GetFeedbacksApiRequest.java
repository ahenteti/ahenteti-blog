package io.ahenteti.blog.model.api.feedback.request;

import io.ahenteti.blog.model.api.PageApiRequest;
import io.ahenteti.blog.model.core.feedback.EFeedbacksSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
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

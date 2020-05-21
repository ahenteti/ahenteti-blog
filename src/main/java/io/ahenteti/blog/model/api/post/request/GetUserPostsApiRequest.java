package io.ahenteti.blog.model.api.post.request;

import io.ahenteti.blog.model.api.PageApiRequest;
import io.ahenteti.blog.model.core.post.EPostsSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetUserPostsApiRequest extends PageApiRequest {
    private IOAuth2User user;

    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EPostsSortBy.values()).map(EPostsSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

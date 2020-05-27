package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.shared.model.api.PageApiRequest;
import io.ahenteti.blog.post.model.core.EPostsSortBy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetUserPostsPageApiRequest extends PageApiRequest {
    private IOAuth2User user;

    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EPostsSortBy.values()).map(EPostsSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

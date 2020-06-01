package io.ahenteti.blog.core.model.post.api.request;

import io.ahenteti.blog.core.model.post.core.EPostsSortBy;
import io.ahenteti.blog.core.model.shared.api.PageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
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

package io.ahenteti.blog.model.api.post.request;

import io.ahenteti.blog.model.api.PageApiRequest;
import io.ahenteti.blog.model.core.post.EPostsSortBy;
import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetUserPostsApiRequest extends PageApiRequest {
    private IUser user;

    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EPostsSortBy.values()).map(EPostsSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}
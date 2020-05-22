package io.ahenteti.blog.model.api.user;

import io.ahenteti.blog.model.api.PageApiRequest;
import io.ahenteti.blog.model.core.user.EUsersSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetUsersPageApiRequest extends PageApiRequest {
    protected IOAuth2User user;

    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EUsersSortBy.values()).map(EUsersSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

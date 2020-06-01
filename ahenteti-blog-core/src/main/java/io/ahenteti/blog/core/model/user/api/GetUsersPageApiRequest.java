package io.ahenteti.blog.core.model.user.api;

import io.ahenteti.blog.core.model.shared.api.PageApiRequest;
import io.ahenteti.blog.core.model.user.core.EUsersSortBy;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
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

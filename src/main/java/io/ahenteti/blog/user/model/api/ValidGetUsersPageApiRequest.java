package io.ahenteti.blog.user.model.api;

import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.user.model.core.EUsersSortBy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUsersPageApiRequest extends ValidPageApiRequest<EUsersSortBy> {

    private IOAuth2User user;

    public ValidGetUsersPageApiRequest(GetUsersPageApiRequest request) {
        super(request, EUsersSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

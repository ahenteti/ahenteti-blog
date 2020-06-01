package io.ahenteti.blog.core.model.user.api;

import io.ahenteti.blog.core.model.user.core.EUsersSortBy;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUsersPageApiRequest extends ValidPageApiRequest<EUsersSortBy> {

    private IOAuth2User user;

    public ValidGetUsersPageApiRequest(GetUsersPageApiRequest request) {
        super(request, EUsersSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

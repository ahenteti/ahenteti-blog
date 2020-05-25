package io.ahenteti.blog.model.api.user;

import io.ahenteti.blog.model.api.ValidPageApiRequest;
import io.ahenteti.blog.model.core.user.EUsersSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUsersPageApiRequest extends ValidPageApiRequest<EUsersSortBy> {

    private IOAuth2User user;

    public ValidGetUsersPageApiRequest(GetUsersPageApiRequest request) {
        super(request, EUsersSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

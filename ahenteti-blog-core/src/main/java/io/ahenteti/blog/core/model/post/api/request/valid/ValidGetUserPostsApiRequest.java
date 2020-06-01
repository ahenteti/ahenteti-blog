package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.core.model.post.core.EPostsSortBy;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUserPostsApiRequest extends ValidPageApiRequest<EPostsSortBy> {

    private IOAuth2User user;

    public ValidGetUserPostsApiRequest(GetUserPostsPageApiRequest request) {
        super(request, EPostsSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

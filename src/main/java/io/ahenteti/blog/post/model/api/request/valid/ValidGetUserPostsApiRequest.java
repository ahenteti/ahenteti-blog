package io.ahenteti.blog.post.model.api.request.valid;

import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.post.model.core.EPostsSortBy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUserPostsApiRequest extends ValidPageApiRequest<EPostsSortBy> {

    private IOAuth2User user;

    public ValidGetUserPostsApiRequest(GetUserPostsPageApiRequest request) {
        super(request, EPostsSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

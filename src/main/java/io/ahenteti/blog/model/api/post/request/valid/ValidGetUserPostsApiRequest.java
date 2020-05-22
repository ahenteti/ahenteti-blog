package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.ValidPageApiRequest;
import io.ahenteti.blog.model.api.post.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.model.core.post.EPostsSortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidGetUserPostsApiRequest extends ValidPageApiRequest<EPostsSortBy> {

    private IOAuth2User user;

    public ValidGetUserPostsApiRequest(GetUserPostsPageApiRequest request) {
        super(request, EPostsSortBy.getByValue(request.getSortBy()));
        this.user = request.getUser();
    }

}

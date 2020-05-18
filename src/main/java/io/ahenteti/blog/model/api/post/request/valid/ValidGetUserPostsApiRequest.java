package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.post.EPostsSortBy;
import lombok.Data;

@Data
public class ValidGetUserPostsApiRequest extends ValidPageApiRequest<EPostsSortBy> {

    public ValidGetUserPostsApiRequest(GetUserPostsApiRequest request) {
        this.user = request.getUser();
        this.page = request.getPage();
        this.size = request.getSize();
        this.sortBy = EPostsSortBy.getByValue(request.getSortBy());
    }

}

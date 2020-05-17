package io.ahenteti.blog.model.api.post;

import lombok.Data;

@Data
public class ValidGetUserPostsApiRequest extends ValidPageApiRequest<EGetUserPostsSortBy> {

    public ValidGetUserPostsApiRequest(GetUserPostsApiRequest request) {
        this.user = request.getUser();
        this.page = request.getPage();
        this.size = request.getSize();
        this.sortBy = EGetUserPostsSortBy.getByValue(request.getSortBy());
    }

}

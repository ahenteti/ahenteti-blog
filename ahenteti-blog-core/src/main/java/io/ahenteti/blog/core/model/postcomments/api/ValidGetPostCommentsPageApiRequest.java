package io.ahenteti.blog.core.model.postcomments.api;

import io.ahenteti.blog.core.model.postcomments.core.EPostCommentsSortBy;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import lombok.Data;

@Data
public class ValidGetPostCommentsPageApiRequest extends ValidPageApiRequest<EPostCommentsSortBy> {
    private String slug;

    public ValidGetPostCommentsPageApiRequest(GetPostCommentsPageApiRequest request) {
        super(request, EPostCommentsSortBy.getByValue(request.getSortBy()));
        this.slug = request.getSlug();
    }
}

package io.ahenteti.blog.core.model.postcomments.api;

import io.ahenteti.blog.core.model.postcomments.core.EPostCommentsSortBy;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import lombok.Data;

@Data
public class ValidGetPostCommentsPageApiRequest extends ValidPageApiRequest<EPostCommentsSortBy> {
    private Long postId;

    public ValidGetPostCommentsPageApiRequest(GetPostCommentsPageApiRequest request) {
        super(request, EPostCommentsSortBy.getByValue(request.getSortBy()));
        this.postId = request.getPostId();
    }
}

package io.ahenteti.blog.postcomments.model.api;

import io.ahenteti.blog.postcomments.model.core.EPostCommentsSortBy;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import lombok.Data;

@Data
public class ValidGetPostCommentsPageApiRequest extends ValidPageApiRequest<EPostCommentsSortBy> {
    private Long postId;

    public ValidGetPostCommentsPageApiRequest(GetPostCommentsPageApiRequest request) {
        super(request, EPostCommentsSortBy.getByValue(request.getSortBy()));
        this.postId = request.getPostId();
    }
}

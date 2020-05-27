package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostCommentsApiResponseConverter {

    private ToPostCommentApiResponseConverter toPostCommentApiResponseConverter;

    @Autowired
    public ToPostCommentsApiResponseConverter(ToPostCommentApiResponseConverter toPostCommentApiResponseConverter) {
        this.toPostCommentApiResponseConverter = toPostCommentApiResponseConverter;
    }

    public PostCommentsApiResponse toPostCommentsApiResponse(PostComments comments) {
        PostCommentsApiResponse res = new PostCommentsApiResponse();
        comments.stream().map(toPostCommentApiResponseConverter::toPostCommentApiResponse).forEach(res::add);
        return res;
    }

}

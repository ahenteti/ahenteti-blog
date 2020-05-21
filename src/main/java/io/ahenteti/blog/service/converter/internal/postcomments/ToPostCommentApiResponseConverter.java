package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.api.postcomments.PostCommentApiResponse;
import io.ahenteti.blog.model.core.postcomments.PostComment;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostCommentApiResponseConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostCommentApiResponseConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostCommentApiResponse toPostCommentApiResponse(PostComment comment) {
        PostCommentApiResponse res = new PostCommentApiResponse();
        res.setAuthor(userConverter.toAuthorApiResponse(comment.getAuthor()));
        res.setCreatedAtIso8601(comment.getCreatedAt().toString());
        res.setValue(comment.getValue());
        return res;
    }

}

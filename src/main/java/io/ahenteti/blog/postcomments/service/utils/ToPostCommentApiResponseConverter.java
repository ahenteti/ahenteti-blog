package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.api.PostCommentApiResponse;
import io.ahenteti.blog.postcomments.model.core.PostComment;
import io.ahenteti.blog.user.service.UserConverter;
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

package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.core.PostComment;
import io.ahenteti.blog.model.entity.PostCommentEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ToPostCommentConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostCommentConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostComment toPostComment(CreatePostCommentApiRequest request) {
        PostComment res = new PostComment();
        res.setAuthor(request.getAuthor());
        res.setValue(request.getValue());
        res.setCreatedAt(Instant.now());
        res.setPostId(request.getPostId());
        return res;
    }

    public PostComment toPostComment(PostCommentEntity entity) {
        PostComment res = new PostComment();
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setPostId(entity.getPost().getId());
        return res;
    }

}

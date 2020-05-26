package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.api.postcomments.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.model.core.postcomments.PostComment;
import io.ahenteti.blog.model.core.postcomments.ReadyToCreatePostComment;
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

    public ReadyToCreatePostComment toPostComment(ValidCreatePostCommentApiRequest request) {
        ReadyToCreatePostComment res = new ReadyToCreatePostComment();
        res.setId(null);
        res.setAuthor(userConverter.toCoreModel(request.getAuthor()));
        res.setValue(request.getValue());
        res.setCreatedAt(Instant.now());
        res.setPostId(request.getPostId());
        return res;
    }

    public PostComment toPostComment(PostCommentEntity entity) {
        PostComment res = new PostComment();
        res.setId(entity.getId());
        res.setAuthor(userConverter.toCoreModel(entity.getAuthor()));
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setPostId(entity.getPost().getId());
        return res;
    }

}

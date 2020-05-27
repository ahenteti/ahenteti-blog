package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComment;
import io.ahenteti.blog.postcomments.model.core.PostCommentToCreate;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import io.ahenteti.blog.user.service.UserConverter;
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

    public PostCommentToCreate toPostComment(ValidCreatePostCommentApiRequest request) {
        PostCommentToCreate res = new PostCommentToCreate();
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

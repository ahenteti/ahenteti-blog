package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.core.ValidPostCommentToCreate;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import org.springframework.stereotype.Service;

@Service
public class ToPostCommentEntityConverter {

    public PostCommentEntity toEntity(ValidPostCommentToCreate comment) {
        PostCommentEntity res = new PostCommentEntity();
        res.setValue(comment.getValue());
        res.setCreatedAt(comment.getCreatedAt());
        res.setAuthor(comment.getAuthor());
        res.setPost(comment.getPost());
        return res;
    }

}

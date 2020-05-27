package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToPostCommentsConverter {

    private ToPostCommentConverter toPostCommentConverter;

    @Autowired
    public ToPostCommentsConverter(ToPostCommentConverter toPostCommentConverter) {
        this.toPostCommentConverter = toPostCommentConverter;
    }

    public PostComments toPostComments(List<PostCommentEntity> entities) {
        PostComments res = new PostComments();
        entities.stream().map(toPostCommentConverter::toPostComment).forEach(res::add);
        return res;
    }

}

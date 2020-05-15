package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.core.postcomments.PostComments;
import io.ahenteti.blog.model.entity.PostCommentEntity;
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

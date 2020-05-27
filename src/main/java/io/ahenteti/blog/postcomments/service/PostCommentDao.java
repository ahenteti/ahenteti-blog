package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.api.ValidGetPostCommentsPageApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.core.ValidPostCommentToCreate;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import io.ahenteti.blog.shared.service.PageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostCommentDao {

    private PostCommentRepository commentRepository;
    private PostCommentConverter commentConverter;
    private PageConverter pageConverter;

    @Autowired
    public PostCommentDao(PostCommentRepository commentRepository, PostCommentConverter commentConverter, PageConverter pageConverter) {
        this.commentRepository = commentRepository;
        this.commentConverter = commentConverter;
        this.pageConverter = pageConverter;
    }

    public PostCommentEntity create(ValidPostCommentToCreate comment) {
        PostCommentEntity entity = commentConverter.toEntity(comment);
        return commentRepository.save(entity);
    }

    public PostComments getPostComments(ValidGetPostCommentsPageApiRequest request) {
        // @formatter:off
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        List<PostCommentEntity> comments = commentRepository.findByPostId(request.getPostId(), pageRequest).getContent();
        return commentConverter.toPostComments(comments);
        // @formatter:on
    }

}

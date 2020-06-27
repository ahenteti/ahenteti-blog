package io.ahenteti.blog.service.postcomments;

import io.ahenteti.blog.core.model.postcomments.api.ValidGetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.core.PostComments;
import io.ahenteti.blog.core.model.postcomments.core.ValidPostCommentToCreate;
import io.ahenteti.blog.core.model.postcomments.entity.PostCommentEntity;
import io.ahenteti.blog.service.shared.PageConverter;
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
        List<PostCommentEntity> comments = commentRepository.findByPostSlug(request.getSlug(), pageRequest).getContent();
        return commentConverter.toPostComments(comments);
        // @formatter:on
    }

}

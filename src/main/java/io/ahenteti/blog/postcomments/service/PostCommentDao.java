package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.api.GetPostCommentsApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.core.ReadyToCreatePostComment;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostCommentDao {

    private PostCommentRepository commentRepository;
    private PostCommentConverter commentConverter;

    @Autowired
    public PostCommentDao(PostCommentRepository commentRepository, PostCommentConverter commentConverter) {
        this.commentRepository = commentRepository;
        this.commentConverter = commentConverter;
    }

    public PostCommentEntity createComment(ReadyToCreatePostComment comment) {
        PostCommentEntity entity = commentConverter.toCommentEntity(comment);
        return commentRepository.save(entity);
    }

    public PostComments getPostComments(GetPostCommentsApiRequest request) {
        // @formatter:off
        PageRequest commentsPage = PageRequest.of(request.getPage(), request.getSize(), Sort.by("createdAt").descending());
        List<PostCommentEntity> comments = commentRepository.findByPostId(request.getPostId(), commentsPage).getContent();
        return commentConverter.toPostComments(comments);
        // @formatter:on
    }

}

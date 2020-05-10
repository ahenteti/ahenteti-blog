package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.PostComment;
import io.ahenteti.blog.model.core.PostComments;
import io.ahenteti.blog.model.entity.PostCommentEntity;
import io.ahenteti.blog.service.converter.PostCommentConverter;
import io.ahenteti.blog.service.dao.repository.PostCommentRepository;
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

    public PostCommentEntity createComment(PostComment comment) {
        PostCommentEntity entity = commentConverter.toCommentEntity(comment);
        return commentRepository.save(entity);
    }

    public PostComments getPostComments(Integer page, Integer size) {
        PageRequest commentsPage = PageRequest.of(page, size, Sort.by("createdAt").descending());
        List<PostCommentEntity> comments = commentRepository.findAll(commentsPage).getContent();
        return commentConverter.toPostComments(comments);
    }

}

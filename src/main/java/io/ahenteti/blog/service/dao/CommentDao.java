package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.Comment;
import io.ahenteti.blog.model.entity.CommentEntity;
import io.ahenteti.blog.service.converter.CommentConverter;
import io.ahenteti.blog.service.dao.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentDao {

    private CommentRepository commentRepository;
    private CommentConverter commentConverter;

    @Autowired
    public CommentDao(CommentRepository commentRepository, CommentConverter commentConverter) {
        this.commentRepository = commentRepository;
        this.commentConverter = commentConverter;
    }

    public CommentEntity createComment(Comment comment) {
        CommentEntity entity = commentConverter.toCommentEntity(comment);
        return commentRepository.save(entity);
    }

}

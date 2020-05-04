package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.CommentApiResponse;
import io.ahenteti.blog.model.api.CommentsApiResponse;
import io.ahenteti.blog.model.core.Comment;
import io.ahenteti.blog.model.core.Comments;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.CommentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toCollection;

@Service
public class CommentConverter {

    private DateTimeConverter dateTimeConverter;
    private UserConverter userConverter;

    @Autowired
    public CommentConverter(DateTimeConverter dateTimeConverter, UserConverter userConverter) {
        this.dateTimeConverter = dateTimeConverter;
        this.userConverter = userConverter;
    }

    public CommentsApiResponse toCommentsApiResponse(Comments comments) {
        return comments.stream().map(this::toCommentApiResponse).collect(toCollection(CommentsApiResponse::new));
    }

    public CommentApiResponse toCommentApiResponse(Comment comment) {
        CommentApiResponse res = new CommentApiResponse();
        res.setAuthor(userConverter.toUserApiResponse(comment.getAuthor()));
        res.setCreatedAtIso8601(dateTimeConverter.toIso8601(comment.getCreatedAt()));
        res.setValue(comment.getValue());
        return res;
    }

    public Comments toComments(Collection<CommentEntity> entities, UserSummary author, Post post) {
        return entities.stream().map(entity -> toComment(entity, author, post))
                .collect(Collectors.toCollection(Comments::new));
    }

    public Comment toComment(CommentEntity entity, UserSummary author, Post post) {
        Comment res = new Comment();
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setAuthor(author);
        res.setPost(post);
        return res;
    }
}

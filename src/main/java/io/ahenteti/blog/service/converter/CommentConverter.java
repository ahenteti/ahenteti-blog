package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.CommentApiRequest;
import io.ahenteti.blog.model.api.CommentApiResponse;
import io.ahenteti.blog.model.api.CommentsApiResponse;
import io.ahenteti.blog.model.core.Comment;
import io.ahenteti.blog.model.core.Comments;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.entity.CommentEntity;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Collection;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toCollection;

@Service
public class CommentConverter {

    private UserConverter userConverter;
    private UserRepository userRepository;
    private PostRepository postRepository;

    @Autowired
    public CommentConverter(UserConverter userConverter, UserRepository userRepository, PostRepository postRepository) {
        this.userConverter = userConverter;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public CommentsApiResponse toCommentsApiResponse(Comments comments) {
        return comments.stream().map(this::toCommentApiResponse).collect(toCollection(CommentsApiResponse::new));
    }

    public CommentApiResponse toCommentApiResponse(Comment comment) {
        CommentApiResponse res = new CommentApiResponse();
        res.setAuthor(userConverter.toUserApiResponse(comment.getAuthor()));
        res.setCreatedAtIso8601(comment.getCreatedAt().toString());
        res.setValue(comment.getValue());
        return res;
    }

    public Comments toComments(Collection<CommentEntity> entities, IUser author, Post post) {
        return entities.stream().map(entity -> toComment(entity, author, post))
                .collect(Collectors.toCollection(Comments::new));
    }

    public Comment toComment(CommentEntity entity, IUser author, Post post) {
        Comment res = new Comment();
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setAuthor(author);
        res.setPostId(post.getId());
        return res;
    }

    public Comment toComment(CommentApiRequest comment, IUser author) {
        Comment res = new Comment();
        res.setAuthor(author);
        res.setValue(comment.getValue());
        res.setCreatedAt(Instant.now());
        res.setPostId(comment.getPostId());
        return res;
    }

    public CommentEntity toCommentEntity(Comment comment) {
        CommentEntity res = new CommentEntity();
        res.setValue(comment.getValue());
        res.setCreatedAt(comment.getCreatedAt());
        res.setPost(postRepository.getOne(comment.getPostId()));
        res.setAuthor(userRepository.getOne(comment.getAuthor().getId()));
        return res;
    }
}

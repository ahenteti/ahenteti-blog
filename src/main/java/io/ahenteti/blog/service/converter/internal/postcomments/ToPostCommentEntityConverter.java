package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.core.postcomments.ReadyToCreatePostComment;
import io.ahenteti.blog.model.entity.PostCommentEntity;
import io.ahenteti.blog.service.repository.PostRepository;
import io.ahenteti.blog.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostCommentEntityConverter {

    private UserRepository userRepository;
    private PostRepository postRepository;

    @Autowired
    public ToPostCommentEntityConverter(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public PostCommentEntity toCommentEntity(ReadyToCreatePostComment comment) {
        PostCommentEntity res = new PostCommentEntity();
        res.setId(null);
        res.setValue(comment.getValue());
        res.setCreatedAt(comment.getCreatedAt());
        res.setPost(postRepository.getOne(comment.getPostId()));
        res.setAuthor(userRepository.getOne(comment.getAuthor().getId()));
        return res;
    }

}

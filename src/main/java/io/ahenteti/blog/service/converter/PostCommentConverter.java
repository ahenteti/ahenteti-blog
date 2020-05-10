package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.model.api.GetPostCommentsApiRequest;
import io.ahenteti.blog.model.api.PostCommentApiResponse;
import io.ahenteti.blog.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.PostComment;
import io.ahenteti.blog.model.core.PostComments;
import io.ahenteti.blog.model.entity.PostCommentEntity;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toCollection;

@Service
public class PostCommentConverter {

    private UserConverter userConverter;
    private UserRepository userRepository;
    private PostRepository postRepository;

    @Autowired
    public PostCommentConverter(UserConverter userConverter, UserRepository userRepository, PostRepository postRepository) {
        this.userConverter = userConverter;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public CreatePostCommentApiRequest toCreatePostCommentApiRequest(IUser author, Long postId, CreatePostCommentApiRequestBody body) {
        CreatePostCommentApiRequest res = new CreatePostCommentApiRequest();
        res.setAuthor(author);
        res.setPostId(postId);
        res.setValue(body.getValue());
        return res;
    }

    public GetPostCommentsApiRequest toGetPostCommentsApiRequest(Long postId, Integer page, Integer size) {
        GetPostCommentsApiRequest res = new GetPostCommentsApiRequest();
        res.setPostId(postId);
        res.setPage(page);
        res.setSize(size);
        return res;
    }

    public PostCommentsApiResponse toPostCommentsApiResponse(PostComments comments) {
        return comments.stream().map(this::toCommentApiResponse).collect(toCollection(PostCommentsApiResponse::new));
    }

    public PostCommentApiResponse toCommentApiResponse(PostComment comment) {
        PostCommentApiResponse res = new PostCommentApiResponse();
        res.setAuthor(userConverter.toUserApiResponse(comment.getAuthor()));
        res.setCreatedAtIso8601(comment.getCreatedAt().toString());
        res.setValue(comment.getValue());
        return res;
    }

    public PostComment toPostComment(CreatePostCommentApiRequest request) {
        PostComment res = new PostComment();
        res.setAuthor(request.getAuthor());
        res.setValue(request.getValue());
        res.setCreatedAt(Instant.now());
        res.setPostId(request.getPostId());
        return res;
    }

    public PostComments toPostComments(List<PostCommentEntity> entities) {
        PostComments res = new PostComments();
        entities.stream().map(this::toPostComment).forEach(res::add);
        return res;
    }

    public PostComment toPostComment(PostCommentEntity entity) {
        PostComment res = new PostComment();
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setPostId(entity.getPost().getId());
        return res;
    }

    public PostCommentEntity toCommentEntity(PostComment comment) {
        PostCommentEntity res = new PostCommentEntity();
        res.setValue(comment.getValue());
        res.setCreatedAt(comment.getCreatedAt());
        res.setPost(postRepository.getOne(comment.getPostId()));
        res.setAuthor(userRepository.getOne(comment.getAuthor().getId()));
        return res;
    }
}

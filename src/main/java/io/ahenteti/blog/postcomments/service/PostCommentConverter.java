package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.postcomments.model.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.postcomments.model.api.PostCommentApiResponse;
import io.ahenteti.blog.postcomments.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.postcomments.model.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComment;
import io.ahenteti.blog.postcomments.model.core.PostCommentToCreate;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.core.ValidPostCommentToCreate;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.user.service.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PostCommentConverter {

    private UserConverter userConverter;

    @Autowired
    public PostCommentConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public CreatePostCommentApiRequest toApiRequest(IOAuth2User author, Long postId, CreatePostCommentApiRequestBody body) {
        CreatePostCommentApiRequest res = new CreatePostCommentApiRequest();
        res.setAuthor(author);
        res.setPostId(postId);
        res.setValue(body.getValue());
        return res;
    }

    public GetPostCommentsPageApiRequest toApiRequest(Long postId, Integer page, Integer size, String sortBy, String sortDirection) {
        GetPostCommentsPageApiRequest res = new GetPostCommentsPageApiRequest();
        res.setPostId(postId);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        res.setFilter("");
        return res;
    }

    public PostCommentsApiResponse toApiResponse(PostComments comments) {
        PostCommentsApiResponse res = new PostCommentsApiResponse();
        comments.stream().map(this::toApiResponse).forEach(res::add);
        return res;
    }

    public PostCommentApiResponse toApiResponse(PostComment comment) {
        PostCommentApiResponse res = new PostCommentApiResponse();
        res.setAuthor(userConverter.toAuthorApiResponse(comment.getAuthor()));
        res.setCreatedAtIso8601(comment.getCreatedAt().toString());
        res.setValue(comment.getValue());
        return res;
    }

    public PostCommentToCreate toPostCommentToCreate(ValidCreatePostCommentApiRequest request) {
        PostCommentToCreate res = new PostCommentToCreate();
        res.setAuthor(userConverter.toUser(request.getAuthor()));
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

    private PostComment toPostComment(PostCommentEntity entity) {
        PostComment res = new PostComment();
        res.setId(entity.getId());
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        res.setValue(entity.getValue());
        res.setCreatedAt(entity.getCreatedAt());
        res.setPostId(entity.getPost().getId());
        return res;
    }

    public PostCommentEntity toEntity(ValidPostCommentToCreate comment) {
        PostCommentEntity res = new PostCommentEntity();
        res.setValue(comment.getValue());
        res.setCreatedAt(comment.getCreatedAt());
        res.setAuthor(comment.getAuthor());
        res.setPost(comment.getPost());
        return res;
    }
}

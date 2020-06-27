package io.ahenteti.blog.service.postcomments;

import io.ahenteti.blog.core.model.postcomments.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.core.model.postcomments.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.PostCommentApiResponse;
import io.ahenteti.blog.core.model.postcomments.api.PostCommentsApiResponse;
import io.ahenteti.blog.core.model.postcomments.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.core.PostComment;
import io.ahenteti.blog.core.model.postcomments.core.PostCommentToCreate;
import io.ahenteti.blog.core.model.postcomments.core.PostComments;
import io.ahenteti.blog.core.model.postcomments.core.ValidPostCommentToCreate;
import io.ahenteti.blog.core.model.postcomments.entity.PostCommentEntity;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.user.UserConverter;
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

    public CreatePostCommentApiRequest toApiRequest(IOAuth2User author, String slug, CreatePostCommentApiRequestBody body) {
        CreatePostCommentApiRequest res = new CreatePostCommentApiRequest();
        res.setAuthor(author);
        res.setSlug(slug);
        res.setValue(body.getValue());
        return res;
    }

    public GetPostCommentsPageApiRequest toApiRequest(String slug, Integer page, Integer size, String sortBy, String sortDirection) {
        GetPostCommentsPageApiRequest res = new GetPostCommentsPageApiRequest();
        res.setSlug(slug);
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
        res.setSlug(request.getSlug());
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

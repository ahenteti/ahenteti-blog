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
import io.ahenteti.blog.service.converter.internal.postcomments.ToCreatePostCommentApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToGetPostCommentsApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentEntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toCollection;

@Service
public class PostCommentConverter {

    private ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter;
    private ToGetPostCommentsApiRequestConverter toGetPostCommentsApiRequestConverter;
    private ToPostCommentApiResponseConverter toPostCommentApiResponseConverter;
    private ToPostCommentConverter toPostCommentConverter;
    private ToPostCommentEntityConverter toPostCommentEntityConverter;

    @Autowired
    public PostCommentConverter(ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter, ToGetPostCommentsApiRequestConverter toGetPostCommentsApiRequestConverter, ToPostCommentApiResponseConverter toPostCommentApiResponseConverter, ToPostCommentConverter toPostCommentConverter, ToPostCommentEntityConverter toPostCommentEntityConverter) {
        this.toCreatePostCommentApiRequestConverter = toCreatePostCommentApiRequestConverter;
        this.toGetPostCommentsApiRequestConverter = toGetPostCommentsApiRequestConverter;
        this.toPostCommentApiResponseConverter = toPostCommentApiResponseConverter;
        this.toPostCommentConverter = toPostCommentConverter;
        this.toPostCommentEntityConverter = toPostCommentEntityConverter;
    }

    public CreatePostCommentApiRequest toCreatePostCommentApiRequest(IUser author, Long postId, CreatePostCommentApiRequestBody body) {
        return this.toCreatePostCommentApiRequestConverter.toCreatePostCommentApiRequest(author, postId, body);
    }

    public GetPostCommentsApiRequest toGetPostCommentsApiRequest(Long postId, Integer page, Integer size) {
        return this.toGetPostCommentsApiRequestConverter.toGetPostCommentsApiRequest(postId, page, size);
    }

    public PostCommentsApiResponse toPostCommentsApiResponse(PostComments comments) {
        return comments.stream().map(this::toCommentApiResponse).collect(toCollection(PostCommentsApiResponse::new));
    }

    public PostCommentApiResponse toCommentApiResponse(PostComment comment) {
        return toPostCommentApiResponseConverter.toCommentApiResponse(comment);
    }

    public PostComment toPostComment(CreatePostCommentApiRequest request) {
        return this.toPostCommentConverter.toPostComment(request);
    }

    public PostComments toPostComments(List<PostCommentEntity> entities) {
        return entities.stream().map(this::toPostComment).collect(Collectors.toCollection(PostComments::new));
    }

    public PostComment toPostComment(PostCommentEntity entity) {
        return toPostComment(entity);
    }

    public PostCommentEntity toCommentEntity(PostComment comment) {
        return toPostCommentEntityConverter.toCommentEntity(comment);
    }
}

package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.postcomments.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.api.postcomments.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.model.api.postcomments.GetPostCommentsApiRequest;
import io.ahenteti.blog.model.api.postcomments.PostCommentApiResponse;
import io.ahenteti.blog.model.api.postcomments.PostCommentsApiResponse;
import io.ahenteti.blog.model.api.postcomments.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.model.core.postcomments.PostComment;
import io.ahenteti.blog.model.core.postcomments.PostComments;
import io.ahenteti.blog.model.core.postcomments.ReadyToCreatePostComment;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.PostCommentEntity;
import io.ahenteti.blog.service.converter.internal.postcomments.ToCreatePostCommentApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToGetPostCommentsApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentEntityConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentsApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.postcomments.ToPostCommentsConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostCommentConverter {

    private ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter;
    private ToGetPostCommentsApiRequestConverter toGetPostCommentsApiRequestConverter;
    private ToPostCommentApiResponseConverter toPostCommentApiResponseConverter;
    private ToPostCommentConverter toPostCommentConverter;
    private ToPostCommentEntityConverter toPostCommentEntityConverter;
    private ToPostCommentsConverter toPostCommentsConverter;
    private ToPostCommentsApiResponseConverter toPostCommentsApiResponseConverter;

    @Autowired
    public PostCommentConverter(ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter, ToGetPostCommentsApiRequestConverter toGetPostCommentsApiRequestConverter, ToPostCommentApiResponseConverter toPostCommentApiResponseConverter, ToPostCommentConverter toPostCommentConverter, ToPostCommentEntityConverter toPostCommentEntityConverter, ToPostCommentsConverter toPostCommentsConverter, ToPostCommentsApiResponseConverter toPostCommentsApiResponseConverter) {
        this.toCreatePostCommentApiRequestConverter = toCreatePostCommentApiRequestConverter;
        this.toGetPostCommentsApiRequestConverter = toGetPostCommentsApiRequestConverter;
        this.toPostCommentApiResponseConverter = toPostCommentApiResponseConverter;
        this.toPostCommentConverter = toPostCommentConverter;
        this.toPostCommentEntityConverter = toPostCommentEntityConverter;
        this.toPostCommentsConverter = toPostCommentsConverter;
        this.toPostCommentsApiResponseConverter = toPostCommentsApiResponseConverter;
    }

    public CreatePostCommentApiRequest toCreatePostCommentApiRequest(IOAuth2User author, Long postId, CreatePostCommentApiRequestBody body) {
        return this.toCreatePostCommentApiRequestConverter.toCreatePostCommentApiRequest(author, postId, body);
    }

    public GetPostCommentsApiRequest toGetPostCommentsApiRequest(Long postId, Integer page, Integer size) {
        return this.toGetPostCommentsApiRequestConverter.toGetPostCommentsApiRequest(postId, page, size);
    }

    public PostCommentsApiResponse toPostCommentsApiResponse(PostComments comments) {
        return toPostCommentsApiResponseConverter.toPostCommentsApiResponse(comments);
    }

    public PostCommentApiResponse toPostCommentApiResponse(PostComment comment) {
        return toPostCommentApiResponseConverter.toPostCommentApiResponse(comment);
    }

    public ReadyToCreatePostComment toPostComment(ValidCreatePostCommentApiRequest request) {
        return this.toPostCommentConverter.toPostComment(request);
    }

    public PostComments toPostComments(List<PostCommentEntity> entities) {
        return toPostCommentsConverter.toPostComments(entities);
    }

    public PostCommentEntity toCommentEntity(ReadyToCreatePostComment comment) {
        return toPostCommentEntityConverter.toCommentEntity(comment);
    }
}

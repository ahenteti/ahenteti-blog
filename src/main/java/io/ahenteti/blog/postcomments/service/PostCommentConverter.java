package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.postcomments.model.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.postcomments.model.api.PostCommentApiResponse;
import io.ahenteti.blog.postcomments.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.postcomments.model.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComment;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.core.PostCommentToCreate;
import io.ahenteti.blog.postcomments.model.core.ValidPostCommentToCreate;
import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import io.ahenteti.blog.postcomments.service.utils.ToCreatePostCommentApiRequestConverter;
import io.ahenteti.blog.postcomments.service.utils.ToPostCommentApiResponseConverter;
import io.ahenteti.blog.postcomments.service.utils.ToPostCommentConverter;
import io.ahenteti.blog.postcomments.service.utils.ToPostCommentEntityConverter;
import io.ahenteti.blog.postcomments.service.utils.ToPostCommentsApiResponseConverter;
import io.ahenteti.blog.postcomments.service.utils.ToPostCommentsConverter;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostCommentConverter {

    private ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter;
    private ToPostCommentApiResponseConverter toPostCommentApiResponseConverter;
    private ToPostCommentConverter toPostCommentConverter;
    private ToPostCommentEntityConverter toPostCommentEntityConverter;
    private ToPostCommentsConverter toPostCommentsConverter;
    private ToPostCommentsApiResponseConverter toPostCommentsApiResponseConverter;

    @Autowired
    public PostCommentConverter(ToCreatePostCommentApiRequestConverter toCreatePostCommentApiRequestConverter, ToPostCommentApiResponseConverter toPostCommentApiResponseConverter, ToPostCommentConverter toPostCommentConverter, ToPostCommentEntityConverter toPostCommentEntityConverter, ToPostCommentsConverter toPostCommentsConverter, ToPostCommentsApiResponseConverter toPostCommentsApiResponseConverter) {
        this.toCreatePostCommentApiRequestConverter = toCreatePostCommentApiRequestConverter;
        this.toPostCommentApiResponseConverter = toPostCommentApiResponseConverter;
        this.toPostCommentConverter = toPostCommentConverter;
        this.toPostCommentEntityConverter = toPostCommentEntityConverter;
        this.toPostCommentsConverter = toPostCommentsConverter;
        this.toPostCommentsApiResponseConverter = toPostCommentsApiResponseConverter;
    }

    public CreatePostCommentApiRequest toApiRequest(IOAuth2User author, Long postId, CreatePostCommentApiRequestBody body) {
        return this.toCreatePostCommentApiRequestConverter.toCreatePostCommentApiRequest(author, postId, body);
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
        return toPostCommentsApiResponseConverter.toPostCommentsApiResponse(comments);
    }

    public PostCommentApiResponse toPostCommentApiResponse(PostComment comment) {
        return toPostCommentApiResponseConverter.toPostCommentApiResponse(comment);
    }

    public PostCommentToCreate toCoreModel(ValidCreatePostCommentApiRequest request) {
        return this.toPostCommentConverter.toPostComment(request);
    }

    public PostComments toPostComments(List<PostCommentEntity> entities) {
        return toPostCommentsConverter.toPostComments(entities);
    }

    public PostCommentEntity toEntity(ValidPostCommentToCreate comment) {
        return toPostCommentEntityConverter.toEntity(comment);
    }
}

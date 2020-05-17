package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.post.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.CreatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.DeletePostApiRequest;
import io.ahenteti.blog.model.api.post.GetUserPostsApiRequest;
import io.ahenteti.blog.model.api.post.PostApiResponse;
import io.ahenteti.blog.model.api.post.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.post.PostsSummariesApiResponse;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostSummary;
import io.ahenteti.blog.model.core.post.PostsSummaries;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.core.user.IUser;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.internal.post.ToCreatePostApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToGetPostApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostEntityConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostSummaryApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostSummaryConverter;
import io.ahenteti.blog.service.converter.internal.post.ToUpdatePostApiRequestConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostConverter {

    private final UserConverter userConverter;
    private final ToPostSummaryConverter toPostSummaryConverter;
    private final ToPostConverter toPostConverter;
    private final ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter;
    private final ToPostApiResponseConverter toPostApiResponseConverter;
    private final ToCreatePostApiRequestConverter toCreatePostApiRequestConverter;
    private final ToUpdatePostApiRequestConverter toUpdatePostApiRequestConverter;
    private final ToPostEntityConverter toPostEntityConverter;
    private final ToGetPostApiRequestConverter toGetPostApiRequestConverter;

    @Autowired
    public PostConverter(UserConverter userConverter, ToPostSummaryConverter toPostSummaryConverter, ToPostConverter toPostConverter, ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter, ToPostApiResponseConverter toPostApiResponseConverter, ToCreatePostApiRequestConverter toCreatePostApiRequestConverter, ToUpdatePostApiRequestConverter toUpdatePostApiRequestConverter, ToPostEntityConverter toPostEntityConverter, ToGetPostApiRequestConverter toGetPostApiRequestConverter) {
        this.userConverter = userConverter;
        this.toPostSummaryConverter = toPostSummaryConverter;
        this.toPostConverter = toPostConverter;
        this.toPostSummaryApiResponseConverter = toPostSummaryApiResponseConverter;
        this.toPostApiResponseConverter = toPostApiResponseConverter;
        this.toCreatePostApiRequestConverter = toCreatePostApiRequestConverter;
        this.toUpdatePostApiRequestConverter = toUpdatePostApiRequestConverter;
        this.toPostEntityConverter = toPostEntityConverter;
        this.toGetPostApiRequestConverter = toGetPostApiRequestConverter;
    }

    public PostSummary toPostSummary(PostEntity entity) {
        return toPostSummaryConverter.toPostSummary(entity);
    }

    public Post toPost(PostEntity entity) {
        return toPostConverter.toPost(entity);
    }

    public ReadyToCreatePost toPost(ValidCreatePostApiRequest request) {
        return toPostConverter.toPost(request);
    }

    public ReadyToUpdatePost toPost(ValidUpdatePostApiRequest request) {
        return toPostConverter.toPost(request);
    }

    public PostsSummariesApiResponse toPostsSummariesApiResponse(PostsSummaries posts) {
        return posts.stream().map(this::toPostSummaryApiResponse)
                .collect(Collectors.toCollection(PostsSummariesApiResponse::new));
    }

    public PostSummaryApiResponse toPostSummaryApiResponse(PostSummary post) {
        return toPostSummaryApiResponseConverter.toPostSummaryApiResponse(post);
    }

    public PostSummaryApiResponse toPostSummaryApiResponse(PostEntity post) {
        return toPostSummaryApiResponse(toPostSummary(post));
    }

    public PostApiResponse toPostApiResponse(Post post) {
        return toPostApiResponseConverter.toPostApiResponse(post);
    }

    public GetUserPostsApiRequest toGetUserPostsApiRequest(IUser user, Integer page, Integer size) {
        return toGetPostApiRequestConverter.toGetUserPostsApiRequest(user, page, size);
    }

    public PostsSummaries toPostsSummaries(List<PostEntity> posts) {
        return posts.stream().map(this::toPostSummary).collect(Collectors.toCollection(PostsSummaries::new));
    }

    public CreatePostApiRequest toCreatePostApiRequestBody(IUser user, CreatePostApiRequestBody requestBody) {
        return toCreatePostApiRequestConverter.toCreatePostApiRequestBody(user, requestBody);
    }

    public UpdatePostApiRequest toUpdatePostApiRequest(IUser user, Long id, UpdatePostApiRequestBody requestBody) {
        return toUpdatePostApiRequestConverter.toUpdatePostApiRequest(user, id, requestBody);
    }

    public PostEntity toPostEntity(ReadyToUpdatePost post) {
        return toPostEntityConverter.toPostEntity(post);
    }

    public PostEntity toPostEntity(ReadyToCreatePost post) {
        return toPostEntityConverter.toPostEntity(post);
    }

    public DeletePostApiRequest toDeletePostApiRequest(IUser user, Long postId) {
        DeletePostApiRequest res = new DeletePostApiRequest();
        res.setUser(user);
        res.setPostId(postId);
        return res;
    }
}

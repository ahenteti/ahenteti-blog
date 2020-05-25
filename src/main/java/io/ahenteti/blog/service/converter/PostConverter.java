package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.ValidPageApiRequest;
import io.ahenteti.blog.model.api.post.request.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.CreatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.api.post.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.response.PostApiResponse;
import io.ahenteti.blog.model.api.post.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.model.api.post.response.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.post.response.PostsGroupsApiResponse;
import io.ahenteti.blog.model.api.post.response.UserPostApiResponse;
import io.ahenteti.blog.model.api.post.response.UserPostsPageApiResponse;
import io.ahenteti.blog.model.core.IGroupByStrategy;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostSummary;
import io.ahenteti.blog.model.core.post.PostsGroups;
import io.ahenteti.blog.model.core.post.PostsPage;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.internal.post.ToCreatePostApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToDeletePostApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToGetPostsGroupsApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToGetPostsGroupsApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToGetUserPostsPageApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostEntityConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostGroupByStrategiesApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostSummaryApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostSummaryConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostsGroupsConverter;
import io.ahenteti.blog.service.converter.internal.post.ToPostsPageConverter;
import io.ahenteti.blog.service.converter.internal.post.ToUpdatePostApiRequestConverter;
import io.ahenteti.blog.service.converter.internal.post.ToUserPostSummaryApiResponseConverter;
import io.ahenteti.blog.service.converter.internal.post.ToUserPostsPageApiResponseConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.SortedMap;
import java.util.stream.Collectors;

@Service
public class PostConverter {

    private final ToPostSummaryConverter toPostSummaryConverter;
    private final ToPostConverter toPostConverter;
    private final ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter;
    private final ToPostApiResponseConverter toPostApiResponseConverter;
    private final ToCreatePostApiRequestConverter toCreatePostApiRequestConverter;
    private final ToUpdatePostApiRequestConverter toUpdatePostApiRequestConverter;
    private final ToPostEntityConverter toPostEntityConverter;
    private final ToGetUserPostsPageApiRequestConverter toGetUserPostsPageApiRequestConverter;
    private final ToPostsPageConverter toPostsPageConverter;
    private final ToUserPostsPageApiResponseConverter toUserPostsApiResponseConverter;
    private final ToGetPostsGroupsApiRequestConverter toGetPostsGroupsApiRequestConverter;
    private final ToDeletePostApiRequestConverter toDeletePostApiRequestConverter;
    private final ToGetPostsGroupsApiResponseConverter toGetPostsGroupsApiResponseConverter;
    private final ToPostsGroupsConverter toPostsGroupsConverter;
    private final ToPostGroupByStrategiesApiResponseConverter toPostGroupByStrategiesApiResponseConverter;
    private final ToUserPostSummaryApiResponseConverter toUserPostApiResponseConverter;

    @Autowired
    public PostConverter(ToPostSummaryConverter toPostSummaryConverter, ToPostConverter toPostConverter, ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter, ToPostApiResponseConverter toPostApiResponseConverter, ToCreatePostApiRequestConverter toCreatePostApiRequestConverter, ToUpdatePostApiRequestConverter toUpdatePostApiRequestConverter, ToPostEntityConverter toPostEntityConverter, ToGetUserPostsPageApiRequestConverter toGetUserPostsPageApiRequestConverter, ToPostsPageConverter toPostsPageConverter, ToUserPostsPageApiResponseConverter toUserPostsApiResponseConverter, ToGetPostsGroupsApiRequestConverter toGetPostsGroupsApiRequestConverter, ToDeletePostApiRequestConverter toDeletePostApiRequestConverter, ToGetPostsGroupsApiResponseConverter toGetPostsGroupsApiResponseConverter, ToPostsGroupsConverter toPostsGroupsConverter, ToPostGroupByStrategiesApiResponseConverter toPostGroupByStrategiesApiResponseConverter, ToUserPostSummaryApiResponseConverter toUserPostApiResponseConverter) {
        this.toPostSummaryConverter = toPostSummaryConverter;
        this.toPostConverter = toPostConverter;
        this.toPostSummaryApiResponseConverter = toPostSummaryApiResponseConverter;
        this.toPostApiResponseConverter = toPostApiResponseConverter;
        this.toCreatePostApiRequestConverter = toCreatePostApiRequestConverter;
        this.toUpdatePostApiRequestConverter = toUpdatePostApiRequestConverter;
        this.toPostEntityConverter = toPostEntityConverter;
        this.toGetUserPostsPageApiRequestConverter = toGetUserPostsPageApiRequestConverter;
        this.toPostsPageConverter = toPostsPageConverter;
        this.toUserPostsApiResponseConverter = toUserPostsApiResponseConverter;
        this.toGetPostsGroupsApiRequestConverter = toGetPostsGroupsApiRequestConverter;
        this.toDeletePostApiRequestConverter = toDeletePostApiRequestConverter;
        this.toGetPostsGroupsApiResponseConverter = toGetPostsGroupsApiResponseConverter;
        this.toPostsGroupsConverter = toPostsGroupsConverter;
        this.toPostGroupByStrategiesApiResponseConverter = toPostGroupByStrategiesApiResponseConverter;
        this.toUserPostApiResponseConverter = toUserPostApiResponseConverter;
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

    public PostsGroupsApiResponse toGetPostsGroupsApiResponse(PostsGroups posts) {
        return toGetPostsGroupsApiResponseConverter.toGetPostsGroupsApiResponse(posts);
    }

    public UserPostsPageApiResponse toUserPostsPageApiResponse(PostsPage postsPage) {
        return toUserPostsApiResponseConverter.toUserPostsPageApiResponse(postsPage);
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

    public GetUserPostsPageApiRequest toGetUserPostsPageApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        return toGetUserPostsPageApiRequestConverter
                .toGetUserPostsPageApiRequest(user, page, size, sortBy, sortDirection, filter);
    }

    public PostsPage toPostsPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        return toPostsPageConverter.toPostsPage(posts, request);
    }

    public CreatePostApiRequest toCreatePostApiRequestBody(IOAuth2User user, CreatePostApiRequestBody requestBody) {
        return toCreatePostApiRequestConverter.toCreatePostApiRequestBody(user, requestBody);
    }

    public UpdatePostApiRequest toUpdatePostApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        return toUpdatePostApiRequestConverter.toUpdatePostApiRequest(user, id, requestBody);
    }

    public PostEntity toPostEntity(ReadyToUpdatePost post) {
        return toPostEntityConverter.toPostEntity(post);
    }

    public PostEntity toPostEntity(ReadyToCreatePost post) {
        return toPostEntityConverter.toPostEntity(post);
    }

    public DeletePostApiRequest toDeletePostApiRequest(IOAuth2User user, Long postId) {
        return toDeletePostApiRequestConverter.toDeletePostApiRequest(user, postId);
    }

    public GetPostsGroupsApiRequest toGetPostsGroupsApiRequest(List<String> groups, String groupBy) {
        return toGetPostsGroupsApiRequestConverter.toGetPostsGroupsApiRequest(groups, groupBy);
    }

    public PostsGroups toPostsGroups(SortedMap<String, List<PostEntity>> map) {
        return toPostsGroupsConverter.toPostsGroups(map);
    }

    public PostGroupByStrategiesApiResponse toPostGroupByStrategiesApiResponse(List<IGroupByStrategy> strategies) {
        return toPostGroupByStrategiesApiResponseConverter.toPostGroupByStrategiesApiResponse(strategies);
    }

    public List<UserPostApiResponse> toUserPostApiResponseList(List<Post> userPosts) {
        return userPosts.stream().map(toUserPostApiResponseConverter::toUserPostApiResponse)
                .collect(Collectors.toList());
    }
}

package io.ahenteti.blog.post.service;

import io.ahenteti.blog.post.model.api.request.GetPostApiRequest;
import io.ahenteti.blog.post.model.core.ValidPostToCreate;
import io.ahenteti.blog.post.model.core.ValidPostToUpdate;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.response.PostApiResponse;
import io.ahenteti.blog.post.model.api.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.post.model.api.response.PostSummaryApiResponse;
import io.ahenteti.blog.post.model.api.response.PostsGroupsApiResponse;
import io.ahenteti.blog.post.model.api.response.UserPostApiResponse;
import io.ahenteti.blog.post.model.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostSummary;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.core.PostsPage;
import io.ahenteti.blog.post.model.core.PostToCreate;
import io.ahenteti.blog.post.model.core.PostToUpdate;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.post.service.utils.ToCreatePostApiRequestConverter;
import io.ahenteti.blog.post.service.utils.ToDeletePostApiRequestConverter;
import io.ahenteti.blog.post.service.utils.ToGetPostsGroupsApiRequestConverter;
import io.ahenteti.blog.post.service.utils.ToGetPostsGroupsApiResponseConverter;
import io.ahenteti.blog.post.service.utils.ToGetUserPostsPageApiRequestConverter;
import io.ahenteti.blog.post.service.utils.ToPostApiResponseConverter;
import io.ahenteti.blog.post.service.utils.ToPostConverter;
import io.ahenteti.blog.post.service.utils.ToPostEntityConverter;
import io.ahenteti.blog.post.service.utils.ToPostGroupByStrategiesApiResponseConverter;
import io.ahenteti.blog.post.service.utils.ToPostSummaryApiResponseConverter;
import io.ahenteti.blog.post.service.utils.ToPostSummaryConverter;
import io.ahenteti.blog.post.service.utils.ToPostsGroupsConverter;
import io.ahenteti.blog.post.service.utils.ToPostsPageConverter;
import io.ahenteti.blog.post.service.utils.ToUpdatePostApiRequestConverter;
import io.ahenteti.blog.post.service.utils.ToUserPostSummaryApiResponseConverter;
import io.ahenteti.blog.post.service.utils.ToUserPostsPageApiResponseConverter;
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

    public PostToCreate toPost(ValidCreatePostApiRequest request) {
        return toPostConverter.toPost(request);
    }

    public PostToUpdate toPost(ValidUpdatePostApiRequest request) {
        return toPostConverter.toPost(request);
    }

    public PostsGroupsApiResponse toApiResponse(PostsGroups posts) {
        return toGetPostsGroupsApiResponseConverter.toGetPostsGroupsApiResponse(posts);
    }

    public UserPostsPageApiResponse toApiResponse(PostsPage postsPage) {
        return toUserPostsApiResponseConverter.toUserPostsPageApiResponse(postsPage);
    }

    public PostSummaryApiResponse toApiResponse(PostSummary post) {
        return toPostSummaryApiResponseConverter.toPostSummaryApiResponse(post);
    }

    public PostSummaryApiResponse toApiResponse(PostEntity post) {
        return toApiResponse(toPostSummary(post));
    }

    public PostApiResponse toPostApiResponse(Post post) {
        return toPostApiResponseConverter.toPostApiResponse(post);
    }

    public GetUserPostsPageApiRequest toApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        return toGetUserPostsPageApiRequestConverter
                .toGetUserPostsPageApiRequest(user, page, size, sortBy, sortDirection, filter);
    }

    public PostsPage toPostsPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        return toPostsPageConverter.toPostsPage(posts, request);
    }

    public CreatePostApiRequest toApiRequest(IOAuth2User user, CreatePostApiRequestBody requestBody) {
        return toCreatePostApiRequestConverter.toApiRequest(user, requestBody);
    }

    public UpdatePostApiRequest toApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        return toUpdatePostApiRequestConverter.toApiRequest(user, id, requestBody);
    }

    public PostEntity toEntity(ValidPostToUpdate post) {
        return toPostEntityConverter.toEntity(post);
    }

    public PostEntity toEntity(ValidPostToCreate post) {
        return toPostEntityConverter.toEntity(post);
    }

    public DeletePostApiRequest toDeletePostApiRequest(IOAuth2User user, Long postId) {
        return toDeletePostApiRequestConverter.toDeletePostApiRequest(user, postId);
    }

    public GetPostsGroupsApiRequest toApiRequest(List<String> groups, String groupBy) {
        return toGetPostsGroupsApiRequestConverter.toGetPostsGroupsApiRequest(groups, groupBy);
    }

    public PostsGroups toPostsGroups(SortedMap<String, List<PostEntity>> map) {
        return toPostsGroupsConverter.toPostsGroups(map);
    }

    public PostGroupByStrategiesApiResponse toPostGroupByStrategiesApiResponse(List<IGroupByStrategy> strategies) {
        return toPostGroupByStrategiesApiResponseConverter.toPostGroupByStrategiesApiResponse(strategies);
    }

    public List<UserPostApiResponse> toApiResponse(List<Post> userPosts) {
        return userPosts.stream().map(toUserPostApiResponseConverter::toUserPostApiResponse)
                .collect(Collectors.toList());
    }

    public GetPostApiRequest toApiRequest(Long postId) {
        GetPostApiRequest res = new GetPostApiRequest();
        res.setPostId(postId);
        return res;
    }
}

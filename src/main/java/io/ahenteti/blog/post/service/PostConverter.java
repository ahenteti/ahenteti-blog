package io.ahenteti.blog.post.service;

import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostApiRequest;
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
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostSummary;
import io.ahenteti.blog.post.model.core.PostToCreate;
import io.ahenteti.blog.post.model.core.PostToUpdate;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.core.PostsPage;
import io.ahenteti.blog.post.model.core.ValidPostToCreate;
import io.ahenteti.blog.post.model.core.ValidPostToUpdate;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.post.service.helper.PostApiRequestConverter;
import io.ahenteti.blog.post.service.helper.PostApiResponseConverter;
import io.ahenteti.blog.post.service.helper.PostCoreModelConverter;
import io.ahenteti.blog.post.service.helper.PostEntityConverter;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.SortedMap;

@Service
public class PostConverter {

    private PostEntityConverter postEntityConverter;
    private PostCoreModelConverter postCoreModelConverter;
    private PostApiResponseConverter postApiResponseConverter;
    private PostApiRequestConverter postApiRequestConverter;

    @Autowired
    public PostConverter(PostEntityConverter postEntityConverter, PostCoreModelConverter postCoreModelConverter, PostApiResponseConverter postApiResponseConverter, PostApiRequestConverter postApiRequestConverter) {
        this.postEntityConverter = postEntityConverter;
        this.postCoreModelConverter = postCoreModelConverter;
        this.postApiResponseConverter = postApiResponseConverter;
        this.postApiRequestConverter = postApiRequestConverter;
    }

    //////////////////////////////////////////////////////
    // entities
    //////////////////////////////////////////////////////
    public PostEntity toEntity(ValidPostToUpdate post) {
        return postEntityConverter.toEntity(post);
    }

    public PostEntity toEntity(ValidPostToCreate post) {
        return postEntityConverter.toEntity(post);
    }

    //////////////////////////////////////////////////////
    // core models
    //////////////////////////////////////////////////////
    public PostSummary toPostSummary(PostEntity entity) {
        return postCoreModelConverter.toPostSummary(entity);
    }

    public Post toPost(PostEntity entity) {
        return postCoreModelConverter.toPost(entity);
    }

    public PostToCreate toPostToCreate(ValidCreatePostApiRequest request) {
        return postCoreModelConverter.toPostToCreate(request);
    }

    public PostToUpdate toPostToUpdate(ValidUpdatePostApiRequest request) {
        return postCoreModelConverter.toPostToUpdate(request);
    }

    public PostsPage toPostsPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        return postCoreModelConverter.toPostsPage(posts, request);
    }

    public PostsGroups toPostsGroups(SortedMap<String, List<PostEntity>> map) {
        return postCoreModelConverter.toPostsGroups(map);
    }

    //////////////////////////////////////////////////////
    // API response
    //////////////////////////////////////////////////////
    public PostsGroupsApiResponse toApiResponse(PostsGroups posts) {
        return postApiResponseConverter.toApiResponse(posts);
    }

    public UserPostsPageApiResponse toApiResponse(PostsPage postsPage) {
        return postApiResponseConverter.toApiResponse(postsPage);
    }

    public PostSummaryApiResponse toApiResponse(PostSummary post) {
        return postApiResponseConverter.toApiResponse(post);
    }

    public PostApiResponse toPostApiResponse(Post post) {
        return postApiResponseConverter.toPostApiResponse(post);
    }

    public PostGroupByStrategiesApiResponse toPostGroupByStrategiesApiResponse(List<IGroupByStrategy> strategies) {
        return postApiResponseConverter.toPostGroupByStrategiesApiResponse(strategies);
    }

    public List<UserPostApiResponse> toApiResponse(List<Post> userPosts) {
        return postApiResponseConverter.toApiResponse(userPosts);
    }

    //////////////////////////////////////////////////////
    // API request
    //////////////////////////////////////////////////////
    public GetUserPostsPageApiRequest toApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        return postApiRequestConverter.toApiRequest(user, page, size, sortBy, sortDirection, filter);
    }

    public CreatePostApiRequest toApiRequest(IOAuth2User user, CreatePostApiRequestBody requestBody) {
        return postApiRequestConverter.toApiRequest(user, requestBody);
    }

    public UpdatePostApiRequest toApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        return postApiRequestConverter.toApiRequest(user, id, requestBody);
    }

    public DeletePostApiRequest toApiRequest(IOAuth2User user, Long postId) {
        return postApiRequestConverter.toApiRequest(user, postId);
    }

    public GetPostsGroupsApiRequest toApiRequest(List<String> groups, String groupBy) {
        return postApiRequestConverter.toApiRequest(groups, groupBy);
    }

    public GetPostApiRequest toApiRequest(Long postId) {
        return postApiRequestConverter.toApiRequest(postId);
    }
}

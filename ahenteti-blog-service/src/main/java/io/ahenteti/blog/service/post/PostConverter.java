package io.ahenteti.blog.service.post;

import io.ahenteti.blog.core.model.post.api.request.BulkCreateAndUpdatePostOperationsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.CreatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.core.model.post.api.request.DeletePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.DeleteUserPostsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetPostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.core.model.post.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidBulkCreateAndUpdatePostOperationsApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.core.model.post.api.response.PostApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostSummaryApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostsGroupsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.core.model.post.core.BulkCreateAndUpdatePostOperations;
import io.ahenteti.blog.core.model.post.core.Post;
import io.ahenteti.blog.core.model.post.core.PostSummary;
import io.ahenteti.blog.core.model.post.core.PostToCreate;
import io.ahenteti.blog.core.model.post.core.PostToUpdate;
import io.ahenteti.blog.core.model.post.core.PostsGroups;
import io.ahenteti.blog.core.model.post.core.PostsPage;
import io.ahenteti.blog.core.model.post.core.ValidPostToCreate;
import io.ahenteti.blog.core.model.post.core.ValidPostToUpdate;
import io.ahenteti.blog.core.model.post.entity.PostEntity;
import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
import io.ahenteti.blog.core.model.shared.core.IGroupByStrategy;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.post.helper.PostApiRequestConverter;
import io.ahenteti.blog.service.post.helper.PostApiResponseConverter;
import io.ahenteti.blog.service.post.helper.PostCoreModelConverter;
import io.ahenteti.blog.service.post.helper.PostEntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    public BulkCreateAndUpdatePostOperations toBulkOperations(ValidBulkCreateAndUpdatePostOperationsApiRequest validRequest) {
        return postCoreModelConverter.toBulkOperations(validRequest);
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

    public UserPostsApiResponse toApiResponse(List<Post> userPosts) {
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

    public UpdatePostApiRequest toApiRequest(IOAuth2User user, String slug, UpdatePostApiRequestBody requestBody) {
        return postApiRequestConverter.toApiRequest(user, slug, requestBody);
    }

    public DeletePostApiRequest toApiRequest(IOAuth2User user, String slug) {
        return postApiRequestConverter.toApiRequest(user, slug);
    }

    public GetPostsGroupsApiRequest toApiRequest(List<String> groups, String groupBy) {
        return postApiRequestConverter.toApiRequest(groups, groupBy);
    }

    public GetPostApiRequest toApiRequest(String slug) {
        return postApiRequestConverter.toApiRequest(slug);
    }

    public BulkCreateAndUpdatePostOperationsApiRequest toApiRequest(IOAuth2User user, MultipartFile file) {
        return postApiRequestConverter.toApiRequest(user, file);
    }

    public DeleteUserPostsApiRequest toApiRequest(IOAuth2User user) {
        return postApiRequestConverter.toApiRequest(user);
    }
}

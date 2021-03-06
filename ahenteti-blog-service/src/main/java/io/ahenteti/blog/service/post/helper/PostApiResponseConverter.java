package io.ahenteti.blog.service.post.helper;

import io.ahenteti.blog.core.model.post.api.response.PostApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostGroupByStrategyApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostSummaryApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostsGroupApiResponse;
import io.ahenteti.blog.core.model.post.api.response.PostsGroupsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsApiResponse;
import io.ahenteti.blog.core.model.post.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.core.model.post.core.Post;
import io.ahenteti.blog.core.model.post.core.PostSummary;
import io.ahenteti.blog.core.model.post.core.PostsGroup;
import io.ahenteti.blog.core.model.post.core.PostsGroups;
import io.ahenteti.blog.core.model.post.core.PostsPage;
import io.ahenteti.blog.core.model.shared.core.IGroupByStrategy;
import io.ahenteti.blog.service.user.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostApiResponseConverter {

    private UserConverter userConverter;

    @Autowired
    public PostApiResponseConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostsGroupsApiResponse toApiResponse(PostsGroups posts) {
        PostsGroupsApiResponse res = new PostsGroupsApiResponse();
        for (PostsGroup postsGroup : posts) {
            PostsGroupApiResponse postsGroupApiResponse = new PostsGroupApiResponse();
            postsGroupApiResponse.setName(postsGroup.getGroupName());
            postsGroupApiResponse.setPosts(postsGroup.getPosts().stream().map(this::toApiResponse)
                    .collect(Collectors.toCollection(ArrayList::new)));
            res.add(postsGroupApiResponse);
        }
        return res;
    }

    public UserPostsPageApiResponse toApiResponse(PostsPage postsPage) {
        UserPostsPageApiResponse res = new UserPostsPageApiResponse();
        res.setPage(postsPage.getPage());
        res.setSize(postsPage.getSize());
        res.setTotalItems(postsPage.getTotalItems());
        res.setItems(postsPage.getItems().stream().map(this::toApiResponse)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

    public PostSummaryApiResponse toApiResponse(PostSummary post) {
        PostSummaryApiResponse res = new PostSummaryApiResponse();
        res.setId(post.getId());
        res.setSlug(post.getSlug());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setStatus(post.getStatus().name());
        res.setAuthor(userConverter.toAuthorApiResponse(post.getAuthor()));
        return res;
    }

    public PostApiResponse toPostApiResponse(Post post) {
        PostApiResponse res = new PostApiResponse();
        res.setId(post.getId());
        res.setSlug(post.getSlug());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setAuthor(userConverter.toAuthorApiResponse(post.getAuthor()));
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }

    public PostGroupByStrategiesApiResponse toPostGroupByStrategiesApiResponse(List<IGroupByStrategy> strategies) {
        PostGroupByStrategiesApiResponse res = new PostGroupByStrategiesApiResponse();
        for (IGroupByStrategy strategy : strategies) {
            res.add(toApiResponse(strategy));
        }
        return res;
    }

    public PostGroupByStrategyApiResponse toApiResponse(IGroupByStrategy strategy) {
        PostGroupByStrategyApiResponse res = new PostGroupByStrategyApiResponse();
        res.setName(strategy.getName());
        res.setValues(strategy.getValues());
        return res;
    }

    public UserPostsApiResponse toApiResponse(List<Post> userPosts) {
        return userPosts.stream().map(this::toUserPostApiResponse)
                .collect(Collectors.toCollection(UserPostsApiResponse::new));
    }

    private UserPostApiResponse toUserPostApiResponse(Post post) {
        UserPostApiResponse res = new UserPostApiResponse();
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }

}

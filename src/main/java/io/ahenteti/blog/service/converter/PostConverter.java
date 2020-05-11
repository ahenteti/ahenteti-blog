package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.GetUserPostsApiRequest;
import io.ahenteti.blog.model.api.PostApiResponse;
import io.ahenteti.blog.model.api.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.PostsSummariesApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostSummary;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostConverter {

    private UserConverter userConverter;

    @Autowired
    public PostConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostSummary toPostSummary(PostEntity entity) {
        PostSummary res = new PostSummary();
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(getLastUpdatedAt(entity));
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        return res;
    }

    public Post toPost(PostEntity entity) {
        Post res = new Post();
        IUser author = userConverter.toUser(entity.getAuthor());
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(getLastUpdatedAt(entity));
        res.setAuthor(author);
        res.setBody(entity.getBody().getValue());
        return res;
    }

    public PostsSummariesApiResponse toPostsSummariesApiResponse(PostsSummaries posts) {
        return posts.stream().map(this::toPostSummaryApiResponse)
                .collect(Collectors.toCollection(PostsSummariesApiResponse::new));
    }

    public PostSummaryApiResponse toPostSummaryApiResponse(PostSummary post) {
        PostSummaryApiResponse res = new PostSummaryApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setAuthor(userConverter.toUserApiResponse(post.getAuthor()));
        return res;
    }

    public PostApiResponse toPostApiResponse(Post post) {
        PostApiResponse res = new PostApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setAuthor(userConverter.toUserApiResponse(post.getAuthor()));
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }

    private Optional<Instant> getLastUpdatedAt(PostEntity entity) {
        return entity.getLastUpdatedAt() != null ? Optional.of(entity.getLastUpdatedAt()) : Optional.empty();
    }

    private Collection<String> toTagsArrayList(PostEntity entity) {
        return Arrays.asList(entity.getTags().split(PostEntity.TAGS_SEPARATOR_REGEX));
    }

    public GetUserPostsApiRequest toGetUserPostsApiRequest(IUser user, String username, Integer page, Integer size) {
        GetUserPostsApiRequest res = new GetUserPostsApiRequest();
        res.setCurrentSecurityUser(user);
        res.setUsernameRequestParam(username);
        res.setPage(page);
        res.setSize(size);
        return res;
    }

    public PostsSummaries toPostsSummaries(List<PostEntity> posts) {
        PostsSummaries res = new PostsSummaries();
        for (PostEntity postEntity : posts) {
            res.add(toPostSummary(postEntity));
        }
        return res;
    }
}

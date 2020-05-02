package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.PostApiResponse;
import io.ahenteti.blog.model.api.PostSummaryApiResponse;
import io.ahenteti.blog.model.api.PostsSummariesApiResponse;
import io.ahenteti.blog.model.core.Comments;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostSummary;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostConverter {

    private UserConverter userConverter;
    private CommentConverter commentConverter;
    private DateTimeConverter dateTimeConverter;

    @Autowired
    public PostConverter(UserConverter userConverter, CommentConverter commentConverter, DateTimeConverter dateTimeConverter) {
        this.userConverter = userConverter;
        this.commentConverter = commentConverter;
        this.dateTimeConverter = dateTimeConverter;
    }

    public PostSummary toPostSummary(PostEntity entity) {
        PostSummary res = new PostSummary();
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(getLastUpdatedAt(entity));
        res.setAuthor(userConverter.from(entity.getAuthor()));
        return res;
    }

    public Post toPost(PostEntity entity) {
        Post res = new Post();
        UserSummary author = userConverter.from(entity.getAuthor());
        Comments comments = commentConverter.toComments(entity.getComments(), author, res);
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(getLastUpdatedAt(entity));
        res.setAuthor(author);
        res.setComments(comments);
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
        res.setCreatedAtIso8601(dateTimeConverter.toIso8601(post.getCreatedAt()));
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(dateTimeConverter.toIso8601(date)));
        res.setAuthor(post.getAuthor().getGithubUsername());
        return res;
    }

    public PostApiResponse toPostApiResponse(Post post) {
        PostApiResponse res = new PostApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(dateTimeConverter.toIso8601(post.getCreatedAt()));
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(dateTimeConverter.toIso8601(date)));
        res.setAuthor(post.getAuthor().getGithubUsername());
        res.setBodyMarkdownBase64(post.getBody());
        res.setComments(commentConverter.toCommentsApiResponse(post.getComments()));
        return res;
    }

    private Optional<ZonedDateTime> getLastUpdatedAt(PostEntity entity) {
        return entity.getLastUpdatedAt() != null ? Optional.of(entity.getLastUpdatedAt()) : Optional.empty();
    }

    private Collection<String> toTagsArrayList(PostEntity entity) {
        return Arrays.asList(entity.getTags().split(PostEntity.TAGS_SEPARATOR_REGEX));
    }
}

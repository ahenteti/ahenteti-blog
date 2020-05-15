package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.CreatePostApiRequest;
import io.ahenteti.blog.model.api.UpdatePostApiRequest;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

@Service
public class ToPostConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
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

    public Post toPost(UpdatePostApiRequest request) {
        Post res = new Post();
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBodyMarkdownBase64());
        res.setAuthor(request.getAuthor());
        res.setCreatedAt(Instant.now());
        res.setLastUpdatedAt(Optional.of(Instant.now()));
        return res;
    }

    public Post toPost(CreatePostApiRequest request) {
        Post res = new Post();
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBodyMarkdownBase64());
        res.setAuthor(request.getAuthor());
        res.setCreatedAt(Instant.now());
        res.setLastUpdatedAt(Optional.empty());
        return res;
    }

    private Optional<Instant> getLastUpdatedAt(PostEntity entity) {
        return entity.getLastUpdatedAt() != null ? Optional.of(entity.getLastUpdatedAt()) : Optional.empty();
    }

    private Collection<String> toTagsArrayList(PostEntity entity) {
        return Arrays.asList(entity.getTags().split(PostEntity.TAGS_SEPARATOR_REGEX));
    }
}

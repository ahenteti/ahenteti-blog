package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.core.PostSummary;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

@Service
public class ToPostSummaryConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostSummaryConverter(UserConverter userConverter) {
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

    private Optional<Instant> getLastUpdatedAt(PostEntity entity) {
        return entity.getLastUpdatedAt() != null ? Optional.of(entity.getLastUpdatedAt()) : Optional.empty();
    }

    private Collection<String> toTagsArrayList(PostEntity entity) {
        return Arrays.asList(entity.getTags().split(PostEntity.TAGS_SEPARATOR_REGEX));
    }

}

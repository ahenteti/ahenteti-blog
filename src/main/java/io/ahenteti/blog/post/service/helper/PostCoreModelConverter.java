package io.ahenteti.blog.post.service.helper;

import io.ahenteti.blog.post.model.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostSummary;
import io.ahenteti.blog.post.model.core.PostToCreate;
import io.ahenteti.blog.post.model.core.PostToUpdate;
import io.ahenteti.blog.post.model.core.PostsGroup;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.core.PostsPage;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.user.model.core.User;
import io.ahenteti.blog.user.service.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.SortedMap;
import java.util.stream.Collectors;

@Service
public class PostCoreModelConverter {

    private UserConverter userConverter;

    @Autowired
    public PostCoreModelConverter(UserConverter userConverter) {
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
        User author = userConverter.toUser(entity.getAuthor());
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

    public PostToUpdate toPostToUpdate(ValidUpdatePostApiRequest request) {
        PostToUpdate res = new PostToUpdate();
        res.setId(request.getPostId());
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBody());
        res.setAuthor(userConverter.toUser(request.getAuthor()));
        res.setLastUpdatedAt(Instant.now());
        return res;
    }

    public PostToCreate toPostToCreate(ValidCreatePostApiRequest request) {
        PostToCreate res = new PostToCreate();
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBody());
        res.setAuthor(userConverter.toUser(request.getAuthor()));
        res.setCreatedAt(Instant.now());
        return res;
    }

    public PostsPage toPostsPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        PostsPage res = new PostsPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(posts.getTotalElements());
        res.setItems(posts.getContent().stream().map(this::toPostSummary)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

    public PostsGroups toPostsGroups(SortedMap<String, List<PostEntity>> map) {
        PostsGroups res = new PostsGroups();
        for (Map.Entry<String, List<PostEntity>> entry : map.entrySet()) {
            PostsGroup group = new PostsGroup();
            group.setGroupName(entry.getKey());
            group.setPosts(entry.getValue().stream().map(this::toPostSummary).collect(Collectors.toList()));
            res.add(group);
        }
        return res;
    }

    private Optional<Instant> getLastUpdatedAt(PostEntity entity) {
        return entity.getLastUpdatedAt() != null ? Optional.of(entity.getLastUpdatedAt()) : Optional.empty();
    }

    private Collection<String> toTagsArrayList(PostEntity entity) {
        return Arrays.asList(entity.getTags().split(PostEntity.TAGS_SEPARATOR_REGEX));
    }

}

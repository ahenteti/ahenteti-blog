package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.ReadyToCreatePost;
import io.ahenteti.blog.post.model.core.ReadyToUpdatePost;
import io.ahenteti.blog.user.model.core.User;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.user.service.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
public class ToPostConverter {

    private UserConverter userConverter;
    private CommonPostConverter commonPostConverter;

    @Autowired
    public ToPostConverter(UserConverter userConverter, CommonPostConverter commonPostConverter) {
        this.userConverter = userConverter;
        this.commonPostConverter = commonPostConverter;
    }

    public Post toPost(PostEntity entity) {
        Post res = new Post();
        User author = userConverter.toCoreModel(entity.getAuthor());
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(commonPostConverter.toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(commonPostConverter.getLastUpdatedAt(entity));
        res.setAuthor(author);
        res.setBody(entity.getBody().getValue());
        return res;
    }

    public ReadyToUpdatePost toPost(ValidUpdatePostApiRequest request) {
        ReadyToUpdatePost res = new ReadyToUpdatePost();
        res.setId(request.getId());
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBodyMarkdownBase64());
        res.setAuthor(userConverter.toCoreModel(request.getAuthor()));
        res.setCreatedAt(request.getCreatedAtIso8601());
        res.setLastUpdatedAt(Optional.of(Instant.now()));
        res.setEntity(request.getPostEntity());
        return res;
    }

    public ReadyToCreatePost toPost(ValidCreatePostApiRequest request) {
        ReadyToCreatePost res = new ReadyToCreatePost();
        res.setId(null);
        res.setTitle(request.getTitle());
        res.setCategory(request.getCategory());
        res.setTags(request.getTags());
        res.setBody(request.getBodyMarkdownBase64());
        res.setAuthor(userConverter.toCoreModel(request.getAuthor()));
        res.setCreatedAt(Instant.now());
        res.setLastUpdatedAt(Optional.empty());
        return res;
    }

}

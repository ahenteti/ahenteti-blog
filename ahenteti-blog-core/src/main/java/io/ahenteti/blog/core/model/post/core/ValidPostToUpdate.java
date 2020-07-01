package io.ahenteti.blog.core.model.post.core;

import io.ahenteti.blog.core.model.post.entity.EPostStatus;
import io.ahenteti.blog.core.model.post.entity.PostEntity;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import lombok.Data;

import java.time.Instant;
import java.util.Collection;

@Data
public class ValidPostToUpdate {

    private String title;
    private String category;
    private Collection<String> tags;
    private String body;
    private Instant lastUpdatedAt;
    private EPostStatus status;
    private UserEntity author;
    private PostEntity entity;

    public ValidPostToUpdate(PostToUpdate post, PostEntity entity, UserEntity author) {
        this.title = post.getTitle();
        this.category = post.getCategory();
        this.tags = post.getTags();
        this.body = post.getBody();
        this.lastUpdatedAt = post.getLastUpdatedAt();
        this.status = post.getStatus();
        this.author = author;
        this.entity = entity;
    }
}

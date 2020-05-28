package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.user.model.entity.UserEntity;
import lombok.Data;

import java.time.Instant;
import java.util.Collection;

@Data
public class ValidPostToUpdate {

    private Long id;
    private String title;
    private String category;
    private Collection<String> tags;
    private String body;
    private Instant lastUpdatedAt;
    private UserEntity author;
    private PostEntity entity;

    public ValidPostToUpdate(PostToUpdate post, PostEntity entity, UserEntity author) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.category = post.getCategory();
        this.tags = post.getTags();
        this.body = post.getBody();
        this.lastUpdatedAt = post.getLastUpdatedAt();
        this.author = author;
        this.entity = entity;
    }
}

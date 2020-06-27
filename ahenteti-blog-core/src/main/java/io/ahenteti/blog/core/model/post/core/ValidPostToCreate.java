package io.ahenteti.blog.core.model.post.core;

import io.ahenteti.blog.core.model.user.entity.UserEntity;
import lombok.Data;

import java.time.Instant;
import java.util.Collection;

@Data
public class ValidPostToCreate {
    private String slug;
    private String title;
    private String category;
    private Collection<String> tags;
    private Instant createdAt;
    private UserEntity author;
    private String body;

    public ValidPostToCreate(PostToCreate post, UserEntity author) {
        this.title = post.getTitle();
        this.slug = post.getSlug();
        this.category = post.getCategory();
        this.tags = post.getTags();
        this.createdAt = post.getCreatedAt();
        this.author = author;
        this.body = post.getBody();
    }

}

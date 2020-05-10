package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.Instant;

@Data
@Entity(name = "T_POST_COMMENTS")
public class PostCommentEntity {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "CREATED_AT")
    private Instant createdAt;

    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    private String value;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private UserEntity author;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private PostEntity post;
}

package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;

@Data
@Entity(name = "T_POSTS")
public class PostEntity {

    public static final String TAGS_SEPARATOR_REGEX = "\\|";

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "CATEGORY", nullable = false)
    private String category;

    @Column(name = "TAGS", nullable = false)
    private String tags;

    @Column(name = "CREATED_AT", nullable = false)
    private Instant createdAt;

    @Column(name = "LAST_UPDATED_AT")
    private Instant lastUpdatedAt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private UserEntity author;

    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Collection<PostCommentEntity> comments = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    private PostBodyEntity body;
}

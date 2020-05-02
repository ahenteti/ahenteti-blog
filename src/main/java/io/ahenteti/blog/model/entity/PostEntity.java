package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collection;

@Data
@Entity(name = "T_POSTS")
public class PostEntity {

    public static final String TAGS_SEPARATOR_REGEX = "\\|";
    private static final String T_POSTS_ID_SEQ = "T_POSTS_ID_SEQ";

    @Id
    @SequenceGenerator(name = T_POSTS_ID_SEQ, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = T_POSTS_ID_SEQ)
    @Column(name = "ID")
    private Long id;
    @Column(name = "TITLE", nullable = false)
    private String title;
    @Column(name = "CATEGORY", nullable = false)
    private String category;
    @Column(name = "TAGS", nullable = false)
    private String tags;
    @Column(name = "CREATED_AT", nullable = false)
    private ZonedDateTime createdAt;
    @Column(name = "LAST_UPDATED_AT")
    private ZonedDateTime lastUpdatedAt;
    @ManyToOne(optional = false)
    private UserEntity author;
    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<CommentEntity> comments = new ArrayList<>();
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    private PostBodyEntity body;
}

package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import java.time.ZonedDateTime;

@Data
@Entity(name = "T_COMMENTS")
public class CommentEntity {
    private static final String T_COMMENTS_ID_SEQ = "T_COMMENTS_ID_SEQ";
    @Id
    @SequenceGenerator(name = T_COMMENTS_ID_SEQ, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = T_COMMENTS_ID_SEQ)
    @Column(name = "ID")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private UserEntity author;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private PostEntity post;
    @Column(name = "CREATED_AT")
    private ZonedDateTime createdAt;
    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    private String value;
}

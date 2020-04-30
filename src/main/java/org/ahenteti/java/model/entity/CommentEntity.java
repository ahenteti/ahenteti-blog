package org.ahenteti.java.model.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.ZonedDateTime;

@Data
@Entity
public class CommentEntity {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private UserEntity author;
    @ManyToOne
    private PostEntity post;
    private ZonedDateTime createdAt;
    private String value;
}

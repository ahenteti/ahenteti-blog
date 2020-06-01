package io.ahenteti.blog.core.model.post.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity(name = "T_POST_BODIES")
public class PostBodyEntity {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    private String value;
}

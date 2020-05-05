package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Data
@Entity(name = "T_POSTS_BODIES")
public class PostBodyEntity {
    private static final String T_POSTS_BODIES_ID_SEQ = "T_POSTS_BODIES_ID_SEQ";
    
    @Id
    @SequenceGenerator(name = T_POSTS_BODIES_ID_SEQ, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = T_POSTS_BODIES_ID_SEQ)
    @Column(name = "ID")
    private Long id;
    
    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    private String value;
}

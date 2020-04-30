package org.ahenteti.java.model.entity;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class PostEntity {

    public static final String TAGS_SEPARATOR = "|";

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String category;
    private String tags;
    private ZonedDateTime createdAt;
    private ZonedDateTime lastUpdatedAt;
    @ManyToOne
    private UserEntity author;
    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CommentEntity> comments = new ArrayList<>();
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private PostBodyEntity body;
    
}

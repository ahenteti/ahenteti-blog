package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@Data
@Entity
@Table(name = "T_FEEDBACKS")
public class FeedbackEntity {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "CREATED_AT", nullable = false)
    private Instant createdAt;

    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    private String value;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private UserEntity author;
    
}

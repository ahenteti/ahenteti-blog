package io.ahenteti.blog.core.model.feedback.entity;

import io.ahenteti.blog.core.model.user.entity.UserEntity;
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
    protected Long id;

    @Column(name = "CREATED_AT", nullable = false)
    protected Instant createdAt;

    @Column(name = "VALUE", columnDefinition = "text", nullable = false)
    protected String value;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    protected UserEntity author;

}

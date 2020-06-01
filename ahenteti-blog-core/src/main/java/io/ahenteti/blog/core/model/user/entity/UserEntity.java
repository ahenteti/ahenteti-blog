package io.ahenteti.blog.core.model.user.entity;

import io.ahenteti.blog.core.model.post.entity.PostEntity;
import io.ahenteti.blog.core.model.postcomments.entity.PostCommentEntity;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static io.ahenteti.blog.core.model.user.entity.UserRoleEntity.USER_ROLE_TABLE_NAME;
import static io.ahenteti.blog.core.model.user.entity.UserRoleKey.ROLE_ID_COLUMN_NAME;
import static io.ahenteti.blog.core.model.user.entity.UserRoleKey.USER_ID_COLUMN_NAME;

@Data
@Entity(name = "T_USERS")
public class UserEntity {

    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "AVATAR")
    private String avatar;

    @Column(name = "PROVIDER")
    private String provider;

    @Column(name = "JOIN_AT")
    private Instant joinAt;

    // @formatter:off
    @JoinTable(
        name = USER_ROLE_TABLE_NAME, 
        joinColumns = {@JoinColumn(name = USER_ID_COLUMN_NAME, referencedColumnName = "ID")}, 
        inverseJoinColumns = {@JoinColumn(name = ROLE_ID_COLUMN_NAME, referencedColumnName = "ID")}
    )
    // @formatter:on
    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles = new ArrayList<>();

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Collection<PostEntity> posts = new ArrayList<>();

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Collection<PostCommentEntity> comments = new ArrayList<>();
}

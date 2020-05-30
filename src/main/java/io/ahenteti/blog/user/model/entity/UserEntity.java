package io.ahenteti.blog.user.model.entity;

import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import io.ahenteti.blog.post.model.entity.PostEntity;
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
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
        name = "T_USER_ROLE", 
        joinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")}, 
        inverseJoinColumns = {@JoinColumn(name = "ROLE_ID", referencedColumnName = "ID")}
    )
    // @formatter:on
    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles = new ArrayList<>();

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Collection<PostEntity> posts = new ArrayList<>();

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private Collection<PostCommentEntity> comments = new ArrayList<>();
}

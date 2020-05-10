package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;

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

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
    private Collection<PostEntity> posts = new ArrayList<>();
}

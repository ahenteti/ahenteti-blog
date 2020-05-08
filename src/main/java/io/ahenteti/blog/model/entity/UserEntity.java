package io.ahenteti.blog.model.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.util.ArrayList;
import java.util.Collection;

@Data
@Entity(name = "T_USERS")
public class UserEntity {
    private static final String T_USERS_ID_SEQ = "T_USERS_ID_SEQ";

    @Id
    @SequenceGenerator(name = T_USERS_ID_SEQ, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = T_USERS_ID_SEQ)
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "AVATAR")
    private String avatar;

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
    private Collection<PostEntity> posts = new ArrayList<>();
}

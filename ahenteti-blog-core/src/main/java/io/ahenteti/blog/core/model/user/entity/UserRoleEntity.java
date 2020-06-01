package io.ahenteti.blog.core.model.user.entity;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import static io.ahenteti.blog.core.model.user.entity.UserRoleKey.ROLE_ID_COLUMN_NAME;
import static io.ahenteti.blog.core.model.user.entity.UserRoleKey.USER_ID_COLUMN_NAME;

@Data
@Entity
@Table(name = UserRoleEntity.USER_ROLE_TABLE_NAME)
public class UserRoleEntity {

    public static final String USER_ROLE_TABLE_NAME = "T_USER_ROLE";
    
    @EmbeddedId
    private UserRoleKey id;

    @ManyToOne
    @MapsId(USER_ID_COLUMN_NAME)
    @JoinColumn(name = USER_ID_COLUMN_NAME)
    UserEntity user;

    @ManyToOne
    @MapsId(ROLE_ID_COLUMN_NAME)
    @JoinColumn(name = ROLE_ID_COLUMN_NAME)
    RoleEntity role;
    
}

package io.ahenteti.blog.core.model.user.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class UserRoleKey implements Serializable {
    public static final String USER_ID_COLUMN_NAME = "USER_ID";
    public static final String ROLE_ID_COLUMN_NAME = "ROLE_ID";
    
    @Column(name = USER_ID_COLUMN_NAME)
    Long userId;

    @Column(name = ROLE_ID_COLUMN_NAME)
    Long roleId;
}

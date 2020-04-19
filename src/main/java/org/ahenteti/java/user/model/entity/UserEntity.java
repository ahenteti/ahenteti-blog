package org.ahenteti.java.user.model.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserEntity {
    @Id
    private long id;
    private String username;
    private String email;
    private String password;
}

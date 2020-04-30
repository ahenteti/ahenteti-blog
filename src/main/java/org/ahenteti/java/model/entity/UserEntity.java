package org.ahenteti.java.model.entity;

import lombok.Data;
import org.ahenteti.java.model.entity.PostEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class UserEntity {
    @Id
    @GeneratedValue
    private long id;
    private String githubUsername;
    @OneToMany(mappedBy = "author")
    private List<PostEntity> posts = new ArrayList<>();
    
}

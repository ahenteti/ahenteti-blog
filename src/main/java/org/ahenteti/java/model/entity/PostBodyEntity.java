package org.ahenteti.java.model.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class PostBodyEntity {
    
    @Id
    @GeneratedValue
    private Long id;
    private String value;
}

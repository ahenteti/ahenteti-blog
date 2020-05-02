package io.ahenteti.blog.model.core;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;

@Data
public class UserSummary {
    private String githubUsername;
}

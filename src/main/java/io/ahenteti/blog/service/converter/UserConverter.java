package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class UserConverter {

    public UserSummary from(UserEntity entity) {
        UserSummary res = new UserSummary();
        res.setGithubUsername(entity.getGithubUsername());
        return res;
    }
}

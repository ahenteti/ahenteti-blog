package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.security.OAuth2GithubUser;
import org.springframework.stereotype.Service;

@Service
public class UserConverter {

    public IUser toUser(UserEntity entity) {
        OAuth2GithubUser res = new OAuth2GithubUser();
        res.setDatabaseUserId(entity.getId());
        res.setName(entity.getUsername());
        res.setAvatarUrl(entity.getAvatar());
        return res;
    }

    public UserEntity toUserEntity(IUser user, Long userId) {
        UserEntity res = new UserEntity();
        res.setId(userId);
        res.setUsername(user.getUsername());
        res.setAvatar(user.getAvatar());
        return res;
    }

    public UserApiResponse toUserApiResponse(IUser user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatar());
        return res;
    }

}

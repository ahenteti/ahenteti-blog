package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.user.UserApiResponse;
import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class UserConverter {

    public User toUser(UserEntity entity) {
        User res = new User();
        res.setId(entity.getId());
        res.setUsername(entity.getUsername());
        res.setAvatarUrl(entity.getAvatar());
        res.setProvider(entity.getProvider());
        return res;
    }

    public User toUser(IOAuth2User user) {
        User res = new User();
        res.setId(user.getPrimaryKey());
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        return res;
    }

    public UserEntity toUserEntity(IOAuth2User user) {
        UserEntity res = new UserEntity();
        res.setId(null);
        res.setUsername(user.getUsername());
        res.setAvatar(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        return res;
    }

    public UserApiResponse toUserApiResponse(IOAuth2User user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        return res;
    }

    public UserApiResponse toUserApiResponse(User user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        return res;
    }

}

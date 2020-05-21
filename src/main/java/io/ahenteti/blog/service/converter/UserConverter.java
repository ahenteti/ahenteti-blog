package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.exception.InvalidApplicationStateException;
import io.ahenteti.blog.model.api.user.UserApiResponse;
import io.ahenteti.blog.model.core.user.EUserRole;
import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.RoleEntity;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.dao.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

@Service
public class UserConverter {

    @Autowired
    private RoleRepository roleRepository;

    public User toUser(UserEntity entity) {
        User res = new User();
        res.setId(entity.getId());
        res.setUsername(entity.getUsername());
        res.setAvatarUrl(entity.getAvatar());
        res.setProvider(entity.getProvider());
        entity.getRoles().forEach(role -> res.getRoles().add(EUserRole.from(role.getName())));
        return res;
    }

    public User toUser(IOAuth2User user) {
        User res = new User();
        res.setId(user.getPrimaryKey());
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        res.setRoles(user.getRoles());
        return res;
    }

    public UserEntity toUserEntity(IOAuth2User user) {
        UserEntity res = new UserEntity();
        res.setId(null);
        res.setUsername(user.getUsername());
        res.setAvatar(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        RoleEntity role = roleRepository.findByName("USER").orElseThrow(throwInvalidApplicationStateException());
        res.getRoles().add(role);
        return res;
    }

    public UserApiResponse toUserApiResponse(IOAuth2User user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        user.getRoles().forEach(role -> res.getRoles().add(role.getValue()));
        return res;
    }

    public UserApiResponse toUserApiResponse(User user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        user.getRoles().forEach(role -> res.getRoles().add(role.getValue()));
        return res;
    }

    private Supplier<InvalidApplicationStateException> throwInvalidApplicationStateException() {
        return () -> new InvalidApplicationStateException("USER role not found in database");
    }

}

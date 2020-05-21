package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDao {

    private UserRepository userRepository;
    private UserConverter userConverter;

    @Autowired
    public UserDao(UserRepository userRepository, UserConverter userConverter) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
    }

    public User createIfNotExists(IOAuth2User user) {
        // @formatter:off
        Optional<UserEntity> userEntityOptional = userRepository.findByUsernameAndProvider(user.getUsername(), user.getProvider());
        UserEntity entity;
        if (userEntityOptional.isPresent()) {
            entity = userEntityOptional.get();
        } else {
            UserEntity userEntity = userConverter.toUserEntity(user);
            entity = userRepository.save(userEntity);
        }
        return userConverter.toUser(entity);
        // @formatter:on
    }
}

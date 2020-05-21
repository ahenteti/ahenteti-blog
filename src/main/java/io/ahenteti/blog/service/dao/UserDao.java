package io.ahenteti.blog.service.dao;

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

    public UserEntity createIfNotExists(IOAuth2User user) {
        // @formatter:off
        Optional<UserEntity> userEntityOptional = userRepository.findByUsernameAndProvider(user.getUsername(), user.getProvider());
        if (userEntityOptional.isPresent()) {
            return userEntityOptional.get();
        }
        UserEntity userEntity = userConverter.toUserEntity(user);
        return userRepository.save(userEntity);
        // @formatter:on
    }
}

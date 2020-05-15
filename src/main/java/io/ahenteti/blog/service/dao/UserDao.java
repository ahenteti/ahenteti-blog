package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.user.IUser;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDao {

    private UserRepository userRepository;
    private UserConverter userConverter;

    @Autowired
    public UserDao(UserRepository userRepository, UserConverter userConverter) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
    }

    public UserEntity createOrUpdate(IUser user) {
        Long userId = userRepository.findByUsername(user.getUsername()).map(UserEntity::getId).orElse(null);
        UserEntity userEntity = userConverter.toUserEntity(user, userId);
        return userRepository.save(userEntity);
    }
}

package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.repository.UserRepository;
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

    public Optional<UserSummary> getUserByUsername(String username) {
        return userRepository.findByUsername(username).map(userConverter::toUserSummary);
    }

    public void createIfNotExists(UserSummary user) {
        if (!getUserByUsername(user.getGithubUsername()).isPresent()) {
            UserEntity userEntity = userConverter.toUserEntity(user);
            userRepository.save(userEntity);
        }
    }
}

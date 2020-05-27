package io.ahenteti.blog.user.service;

import io.ahenteti.blog.user.model.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.user.model.core.User;
import io.ahenteti.blog.user.model.core.UsersPage;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.user.model.entity.UserEntity;
import io.ahenteti.blog.shared.service.PageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDao {

    private UserRepository userRepository;
    private UserConverter userConverter;
    private PageConverter pageConverter;

    @Autowired
    public UserDao(UserRepository userRepository, UserConverter userConverter, PageConverter pageConverter) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
        this.pageConverter = pageConverter;
    }

    public User createIfNotExists(IOAuth2User user) {
        // @formatter:off
        Optional<UserEntity> userEntityOptional = userRepository.findByUsernameAndProvider(user.getUsername(), user.getProvider());
        UserEntity entity;
        if (userEntityOptional.isPresent()) {
            entity = userEntityOptional.get();
        } else {
            UserEntity userEntity = userConverter.toEntity(user);
            entity = userRepository.save(userEntity);
        }
        return userConverter.toCoreModel(entity);
        // @formatter:on
    }

    public UsersPage getUsers(ValidGetUsersPageApiRequest request) {
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<UserEntity> users = userRepository.find(request.getSqlFilter(), pageRequest);
        return userConverter.toUsersPage(users, request);
    }
}

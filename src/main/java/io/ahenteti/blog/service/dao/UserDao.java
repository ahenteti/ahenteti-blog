package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.user.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.UsersPage;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.converter.PageConverter;
import io.ahenteti.blog.service.converter.UserConverter;
import io.ahenteti.blog.service.dao.repository.UserRepository;
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
            UserEntity userEntity = userConverter.toUserEntity(user);
            entity = userRepository.save(userEntity);
        }
        return userConverter.toUser(entity);
        // @formatter:on
    }

    public UsersPage getUsers(ValidGetUsersPageApiRequest request) {
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<UserEntity> users = userRepository.find(request.getSqlFilter(), pageRequest);
        return userConverter.toUsersPage(users, request);
    }
}

package io.ahenteti.blog.service.user;

import io.ahenteti.blog.core.model.user.api.ValidDeleteUserApiRequest;
import io.ahenteti.blog.core.model.user.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.core.model.user.core.User;
import io.ahenteti.blog.core.model.user.core.UsersPage;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.shared.PageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDao {

    private UserRepository userRepository;
    private UserRoleRepository userRoleRepository;
    private UserConverter userConverter;
    private PageConverter pageConverter;

    @Autowired
    public UserDao(UserRepository userRepository, UserRoleRepository userRoleRepository, UserConverter userConverter, PageConverter pageConverter) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
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
        return userConverter.toUser(entity);
        // @formatter:on
    }

    public UsersPage getUsers(ValidGetUsersPageApiRequest request) {
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<UserEntity> users = userRepository.find(request.getSqlFilter(), pageRequest);
        return userConverter.toUsersPage(users, request);
    }

    // @formatter:off
    public void delete(ValidDeleteUserApiRequest validRequest) {
        userRoleRepository.deleteByUserId(validRequest.getUserId()); // many-to-many association, so we deleted manually. inspiration: https://thorben-janssen.com/avoid-cascadetype-delete-many-assocations/
        userRepository.deleteById(validRequest.getUserId());
    }
    // @formatter:on
}

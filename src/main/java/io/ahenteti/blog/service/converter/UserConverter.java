package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.exception.InvalidApplicationStateException;
import io.ahenteti.blog.model.api.user.AuthorApiResponse;
import io.ahenteti.blog.model.api.user.CurrentUserApiResponse;
import io.ahenteti.blog.model.api.user.GetUsersPageApiRequest;
import io.ahenteti.blog.model.api.user.UserApiResponse;
import io.ahenteti.blog.model.api.user.UsersPageApiResponse;
import io.ahenteti.blog.model.api.user.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.model.core.user.EUserRole;
import io.ahenteti.blog.model.core.user.User;
import io.ahenteti.blog.model.core.user.UsersPage;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import io.ahenteti.blog.model.entity.RoleEntity;
import io.ahenteti.blog.model.entity.UserEntity;
import io.ahenteti.blog.service.dao.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.function.Supplier;
import java.util.stream.Collectors;

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
        res.setJoinAt(entity.getJoinAt());
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
        res.setJoinAt(Instant.now());
        return res;
    }

    public CurrentUserApiResponse toCurrentUserApiResponse(IOAuth2User user) {
        CurrentUserApiResponse res = new CurrentUserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        user.getRoles().forEach(role -> res.getRoles().add(role.getValue()));
        return res;
    }

    public AuthorApiResponse toAuthorApiResponse(User user) {
        AuthorApiResponse res = new AuthorApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        return res;
    }

    public UserApiResponse toUserApiResponse(User user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        res.setJoinAtIso8601(user.getJoinAt().toString());
        return res;
    }

    private Supplier<InvalidApplicationStateException> throwInvalidApplicationStateException() {
        return () -> new InvalidApplicationStateException("USER role not found in database");
    }

    public GetUsersPageApiRequest toGetUsersPageApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        GetUsersPageApiRequest res = new GetUsersPageApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        res.setFilter(filter);
        return res;

    }

    public UsersPageApiResponse toUsersPageApiResponse(UsersPage usersPage) {
        UsersPageApiResponse res = new UsersPageApiResponse();
        res.setPage(usersPage.getPage());
        res.setSize(usersPage.getSize());
        res.setTotalItems(usersPage.getTotalItems());
        res.setItems(usersPage.getItems().stream().map(this::toUserApiResponse).collect(Collectors.toList()));
        return res;
    }

    public UsersPage toUsersPage(Page<UserEntity> users, ValidGetUsersPageApiRequest request) {
        UsersPage res = new UsersPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(users.getTotalElements());
        res.setItems(users.getContent().stream().map(this::toUser).collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }
}

package io.ahenteti.blog.service.user;

import io.ahenteti.blog.core.exception.InvalidObjectStateException;
import io.ahenteti.blog.core.model.user.api.AnonymousUserApiResponse;
import io.ahenteti.blog.core.model.user.api.AuthenticatedUserApiResponse;
import io.ahenteti.blog.core.model.user.api.AuthorApiResponse;
import io.ahenteti.blog.core.model.user.api.CurrentUserApiResponse;
import io.ahenteti.blog.core.model.user.api.CurrentUserApiResponseBody;
import io.ahenteti.blog.core.model.user.api.GetUsersPageApiRequest;
import io.ahenteti.blog.core.model.user.api.UserApiResponse;
import io.ahenteti.blog.core.model.user.api.UsersPageApiResponse;
import io.ahenteti.blog.core.model.user.api.ValidGetUsersPageApiRequest;
import io.ahenteti.blog.core.model.user.core.EUserRole;
import io.ahenteti.blog.core.model.user.core.User;
import io.ahenteti.blog.core.model.user.core.UsersPage;
import io.ahenteti.blog.core.model.user.entity.RoleEntity;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.function.Supplier;
import java.util.stream.Collectors;

@Service
public class UserConverter {

    private RoleRepository roleRepository;

    @Autowired
    public UserConverter(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

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
        res.setId(user.getDbId());
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        res.setRoles(user.getRoles());
        return res;
    }

    public UserEntity toEntity(IOAuth2User user) {
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
        if (user == null) {
            return new AnonymousUserApiResponse();
        }
        CurrentUserApiResponseBody body = new CurrentUserApiResponseBody();
        body.setUsername(user.getUsername());
        body.setAvatarUrl(user.getAvatarUrl());
        user.getRoles().forEach(role -> body.getRoles().add(role.getValue()));
        return new AuthenticatedUserApiResponse(body);
    }

    public AuthorApiResponse toAuthorApiResponse(User user) {
        AuthorApiResponse res = new AuthorApiResponse();
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        return res;
    }

    public UserApiResponse toUserApiResponse(User user) {
        UserApiResponse res = new UserApiResponse();
        res.setId(user.getId());
        res.setUsername(user.getUsername());
        res.setAvatarUrl(user.getAvatarUrl());
        res.setProvider(user.getProvider());
        res.setJoinAtIso8601(user.getJoinAt().toString());
        return res;
    }

    private Supplier<InvalidObjectStateException> throwInvalidApplicationStateException() {
        return () -> new InvalidObjectStateException("USER role not found in database");
    }

    public GetUsersPageApiRequest toApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        GetUsersPageApiRequest res = new GetUsersPageApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        res.setFilter(filter);
        return res;

    }

    public UsersPageApiResponse toApiResponse(UsersPage usersPage) {
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

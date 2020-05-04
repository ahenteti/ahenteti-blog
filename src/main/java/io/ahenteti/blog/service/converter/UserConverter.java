package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;

@Service
public class UserConverter {
    
    public UserSummary toUserSummary(UserEntity entity) {
        UserSummary res = new UserSummary();
        res.setGithubUsername(entity.getGithubUsername());
        res.setGithubAvatar(entity.getGithubAvatar());
        return res;
    }

    public UserEntity toUserEntity(UserSummary user) {
        UserEntity res = new UserEntity();
        res.setGithubUsername(user.getGithubUsername());
        res.setGithubAvatar(user.getGithubAvatar());
        return res;
    }

    public UserApiResponse toUserApiResponse(OAuth2User oAuth2User) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(getUsername(oAuth2User));
        res.setAvatarUrl(getUserAvatarUrl(oAuth2User));
        return res;
    }

    public UserApiResponse toUserApiResponse(UserSummary user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getGithubUsername());
        res.setAvatarUrl(user.getGithubAvatar());
        return res;
    }

    public Optional<OAuth2User> toOAuth2User(Principal principal) {
        if (principal instanceof OAuth2AuthenticationToken) {
            return Optional.of(((OAuth2AuthenticationToken) principal).getPrincipal());
        }
        return Optional.empty();
    }

    public Optional<UserSummary> toUser(Principal principal) {
        return toOAuth2User(principal).map(oAuth2User -> {
            UserSummary res = new UserSummary();
            res.setGithubUsername(getUsername(oAuth2User));
            res.setGithubAvatar(getUserAvatarUrl(oAuth2User));
            return res;
        });
    }

    private String getUserAvatarUrl(OAuth2User oAuth2User) {
        return oAuth2User.getAttribute("avatar_url");
    }

    private String getUsername(OAuth2User oAuth2User) {
        return oAuth2User.getAttribute("name");
    }
}

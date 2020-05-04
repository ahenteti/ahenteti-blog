package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.UserApiResponse;
import io.ahenteti.blog.model.core.UserSummary;
import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class UserConverter {

    public UserSummary from(UserEntity entity) {
        UserSummary res = new UserSummary();
        res.setGithubUsername(entity.getGithubUsername());
        res.setGithubAvatar(entity.getGithubAvatar());
        return res;
    }
    
    public UserApiResponse toUserApiResponse(OAuth2User oAuth2User) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(oAuth2User.getAttribute("name"));
        res.setAvatarUrl(oAuth2User.getAttribute("avatar_url"));
        return res;
    }

    public UserApiResponse toUserApiResponse(UserSummary user) {
        UserApiResponse res = new UserApiResponse();
        res.setUsername(user.getGithubUsername());
        res.setAvatarUrl(user.getGithubAvatar());
        return res;
    }
}

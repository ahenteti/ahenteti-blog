package io.ahenteti.blog.core.model.user.oauth2;

import io.ahenteti.blog.core.model.user.core.EUserRole;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.List;

public interface IOAuth2User extends OAuth2User {

    void setDbId(Long id);

    Long getDbId();

    String getUsername();

    String getAvatarUrl();

    String getProvider();

    void setRoles(List<EUserRole> roles);

    List<EUserRole> getRoles();

    default boolean isAdmin() {
        return getRoles().stream().anyMatch(EUserRole.ADMIN::equals);
    }

}

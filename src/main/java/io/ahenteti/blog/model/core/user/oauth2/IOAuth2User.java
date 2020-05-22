package io.ahenteti.blog.model.core.user.oauth2;

import io.ahenteti.blog.model.core.user.EUserRole;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.List;

public interface IOAuth2User extends OAuth2User {

    void setPrimaryKey(Long id);

    Long getPrimaryKey();

    String getUsername();

    String getAvatarUrl();
    
    String getProvider();
    
    void setRoles(List<EUserRole> roles);
    
    List<EUserRole> getRoles();
    
    default boolean isAdmin() {
        return getRoles().stream().anyMatch(EUserRole.ADMIN::equals);
    }
    
}

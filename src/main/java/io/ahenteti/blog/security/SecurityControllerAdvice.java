package io.ahenteti.blog.security;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class SecurityControllerAdvice {
    @ModelAttribute
    public IOAuth2User customPrincipal(Authentication a) {
        return (IOAuth2User) (a == null ? null : a.getPrincipal());
    }
}

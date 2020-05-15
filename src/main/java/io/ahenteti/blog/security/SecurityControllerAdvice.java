package io.ahenteti.blog.security;

import io.ahenteti.blog.model.core.user.IUser;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class SecurityControllerAdvice {
    @ModelAttribute
    public IUser customPrincipal(Authentication a) {
        return (IUser) (a == null ? null : a.getPrincipal());
    }
}

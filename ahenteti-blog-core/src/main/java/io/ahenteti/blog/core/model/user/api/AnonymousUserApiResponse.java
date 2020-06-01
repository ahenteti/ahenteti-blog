package io.ahenteti.blog.core.model.user.api;

import org.springframework.http.HttpStatus;


public class AnonymousUserApiResponse extends CurrentUserApiResponse {

    public AnonymousUserApiResponse() {
        super(null, HttpStatus.FORBIDDEN);
    }

}

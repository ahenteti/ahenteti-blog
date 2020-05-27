package io.ahenteti.blog.user.model.api;

import org.springframework.http.HttpStatus;


public class AnonymousUserApiResponse extends CurrentUserApiResponse {

    public AnonymousUserApiResponse() {
        super(null, HttpStatus.FORBIDDEN);
    }

}

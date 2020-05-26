package io.ahenteti.blog.model.api.user;

import org.springframework.http.HttpStatus;


public class AnonymousUserApiResponse extends CurrentUserApiResponse {

    public AnonymousUserApiResponse() {
        super(null, HttpStatus.FORBIDDEN);
    }

}

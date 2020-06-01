package io.ahenteti.blog.core.model.user.api;

import org.springframework.http.HttpStatus;


public class AuthenticatedUserApiResponse extends CurrentUserApiResponse {

    public AuthenticatedUserApiResponse(CurrentUserApiResponseBody body) {
        super(body, HttpStatus.OK);
    }

}

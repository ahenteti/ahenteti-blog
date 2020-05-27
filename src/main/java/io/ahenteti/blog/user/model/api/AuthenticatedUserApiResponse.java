package io.ahenteti.blog.user.model.api;

import org.springframework.http.HttpStatus;


public class AuthenticatedUserApiResponse extends CurrentUserApiResponse {

    public AuthenticatedUserApiResponse(CurrentUserApiResponseBody body) {
        super(body, HttpStatus.OK);
    }

}

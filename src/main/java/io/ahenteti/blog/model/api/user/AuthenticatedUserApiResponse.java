package io.ahenteti.blog.model.api.user;

import org.springframework.http.HttpStatus;


public class AuthenticatedUserApiResponse extends CurrentUserApiResponse {

    public AuthenticatedUserApiResponse(CurrentUserApiResponseBody body) {
        super(body, HttpStatus.OK);
    }

}

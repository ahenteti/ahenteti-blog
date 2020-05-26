package io.ahenteti.blog.model.api.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class CurrentUserApiResponse extends ResponseEntity<CurrentUserApiResponseBody> {

    public CurrentUserApiResponse(CurrentUserApiResponseBody body, HttpStatus status) {
        super(body, status);
    }
    
}

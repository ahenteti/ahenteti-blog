package io.ahenteti.blog.exception.handler;

import io.ahenteti.blog.exception.UserNotAuthenticatedException;
import io.ahenteti.blog.model.api.ErrorApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserNotAuthenticatedExceptionHandler {
    
    @ExceptionHandler(UserNotAuthenticatedException.class)
    public ResponseEntity<ErrorApiResponse> handleException(UserNotAuthenticatedException t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.FORBIDDEN.value(), t.getMessage()), HttpStatus.FORBIDDEN);
    }
    
}

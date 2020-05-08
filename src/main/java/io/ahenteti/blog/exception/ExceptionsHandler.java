package io.ahenteti.blog.exception;

import io.ahenteti.blog.model.api.ErrorApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionsHandler {

    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorApiResponse> handleException(Throwable t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), t
                .getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorApiResponse> handleException(AuthenticationException t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.FORBIDDEN.value(), t
                .getMessage()), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorApiResponse> handleException(ResourceNotFoundException t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.NOT_FOUND.value(), t
                .getMessage()), HttpStatus.NOT_FOUND);
    }

}

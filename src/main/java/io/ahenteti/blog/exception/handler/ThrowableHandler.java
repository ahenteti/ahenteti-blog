package io.ahenteti.blog.exception.handler;

import io.ahenteti.blog.model.api.ErrorApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ThrowableHandler {
    
    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorApiResponse> handleException(Throwable t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), t.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
}

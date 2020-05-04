package io.ahenteti.blog.exception.handler;

import io.ahenteti.blog.exception.ResourceNotFoundException;
import io.ahenteti.blog.model.api.ErrorApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResourceNotFoundExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorApiResponse> handleException(ResourceNotFoundException t) {
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.NOT_FOUND.value(), t.getMessage()), HttpStatus.NOT_FOUND);
    }
    
}

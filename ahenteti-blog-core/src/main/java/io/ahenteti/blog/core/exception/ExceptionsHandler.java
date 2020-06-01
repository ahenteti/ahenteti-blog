package io.ahenteti.blog.core.exception;

import io.ahenteti.blog.core.model.shared.api.ErrorApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionsHandler {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionsHandler.class);

    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorApiResponse> handleException(Throwable t) {
        LOGGER.error("global exception", t);
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), t
                .getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorApiResponse> handleException(AuthenticationException t) {
        LOGGER.error("AuthenticationException exception", t);
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.FORBIDDEN.value(), t
                .getMessage()), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorApiResponse> handleException(ResourceNotFoundException t) {
        LOGGER.error("ResourceNotFoundException exception", t);
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.NOT_FOUND.value(), t
                .getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({InvalidRequirementException.class})
    public ResponseEntity<ErrorApiResponse> handleException(InvalidRequirementException t) {
        LOGGER.error("InvalidRequirementException exception", t);
        return new ResponseEntity<>(new ErrorApiResponse(HttpStatus.BAD_REQUEST.value(), t
                .getMessage()), HttpStatus.BAD_REQUEST);
    }

}

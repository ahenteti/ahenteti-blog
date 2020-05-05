package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.CommentApiRequest;
import io.ahenteti.blog.model.api.CommentApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static io.ahenteti.blog.security.SecurityConfiguration.SECURE_API_PREFIX;

@RestController
public class CommentController {

    @PostMapping(SECURE_API_PREFIX + "comment")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentApiResponse createComment(@RequestBody CommentApiRequest comment) {
        
        return new CommentApiResponse();
    }
}

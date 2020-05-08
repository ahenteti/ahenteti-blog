package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.CommentApiRequest;
import io.ahenteti.blog.model.core.Comment;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.service.converter.CommentConverter;
import io.ahenteti.blog.service.dao.CommentDao;
import io.ahenteti.blog.service.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static io.ahenteti.blog.security.SecurityConfiguration.SECURE_API_PREFIX;

@RestController
public class CommentController {

    private CommentDao commentDao;
    private CommentConverter commentConverter;
    private UserValidator userValidator;

    @Autowired
    public CommentController(CommentDao commentDao, CommentConverter commentConverter, UserValidator userValidator) {
        this.commentDao = commentDao;
        this.commentConverter = commentConverter;
        this.userValidator = userValidator;
    }

    @Transactional
    @PostMapping(SECURE_API_PREFIX + "comment")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@ModelAttribute IUser user, @RequestBody CommentApiRequest commentApiRequest) {
        userValidator.validate(user);
        Comment comment = commentConverter.toComment(commentApiRequest, user);
        commentDao.createComment(comment);
    }

}

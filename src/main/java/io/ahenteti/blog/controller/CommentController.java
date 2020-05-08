package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.CommentApiRequest;
import io.ahenteti.blog.model.core.Comment;
import io.ahenteti.blog.model.core.GithubUser;
import io.ahenteti.blog.service.converter.CommentConverter;
import io.ahenteti.blog.service.dao.CommentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static io.ahenteti.blog.security.SecurityConfiguration.SECURE_API_PREFIX;

@RestController
public class CommentController {

    private CommentDao commentDao;
    private CommentConverter commentConverter;

    @Autowired
    public CommentController(CommentDao commentDao, CommentConverter commentConverter) {
        this.commentDao = commentDao;
        this.commentConverter = commentConverter;
    }

    @Transactional
    @PostMapping(SECURE_API_PREFIX + "comment")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@RequestBody CommentApiRequest commentApiRequest, @AuthenticationPrincipal GithubUser user) {
        Comment comment = commentConverter.toComment(commentApiRequest, user);
        commentDao.createComment(comment);
    }

}

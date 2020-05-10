package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.model.api.GetPostCommentsApiRequest;
import io.ahenteti.blog.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.model.core.IUser;
import io.ahenteti.blog.model.core.PostComment;
import io.ahenteti.blog.model.core.PostComments;
import io.ahenteti.blog.service.converter.PostCommentConverter;
import io.ahenteti.blog.service.dao.PostCommentDao;
import io.ahenteti.blog.service.validator.PostCommentValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static io.ahenteti.blog.security.SecurityConfiguration.SECURE_API_PREFIX;

@RestController
public class PostCommentController {

    private PostCommentDao commentDao;
    private PostCommentConverter commentConverter;
    private PostCommentValidator commentValidator;

    @Autowired
    public PostCommentController(PostCommentDao commentDao, PostCommentConverter commentConverter, PostCommentValidator commentValidator) {
        this.commentDao = commentDao;
        this.commentConverter = commentConverter;
        this.commentValidator = commentValidator;
    }

    @GetMapping(value = "/api/posts/{postId}/comment")
    public PostCommentsApiResponse getPostComments(@PathVariable("postId") Long postId, @RequestParam Integer page, @RequestParam(required = false, defaultValue = "10") Integer size) {
        GetPostCommentsApiRequest request = commentConverter.toGetPostCommentsApiRequest(postId, page, size);
        commentValidator.validateGetPostCommentsApiRequest(request);
        PostComments postComments = commentDao.getPostComments(page, size);
        return commentConverter.toPostCommentsApiResponse(postComments);
    }

    @Transactional
    @PostMapping(SECURE_API_PREFIX + "/api/posts/{postId}/comment")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@ModelAttribute IUser user, @PathVariable("postId") Long postId, @RequestBody CreatePostCommentApiRequestBody requestBody) {
        CreatePostCommentApiRequest request = commentConverter.toCreatePostCommentApiRequest(user, postId, requestBody);
        commentValidator.validateCreateCommentApiRequest(request);
        PostComment comment = commentConverter.toPostComment(request);
        commentDao.createComment(comment);
    }

}

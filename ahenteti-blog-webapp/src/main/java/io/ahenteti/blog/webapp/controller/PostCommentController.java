package io.ahenteti.blog.webapp.controller;

import io.ahenteti.blog.core.model.postcomments.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.core.model.postcomments.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.PostCommentsApiResponse;
import io.ahenteti.blog.core.model.postcomments.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.ValidGetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.core.PostCommentToCreate;
import io.ahenteti.blog.core.model.postcomments.core.PostComments;
import io.ahenteti.blog.core.model.postcomments.core.ValidPostCommentToCreate;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import io.ahenteti.blog.service.postcomments.PostCommentConverter;
import io.ahenteti.blog.service.postcomments.PostCommentDao;
import io.ahenteti.blog.service.postcomments.PostCommentValidator;
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

    // @formatter:off
    @GetMapping(value = "/api/posts/{postId}/comments")
    public PostCommentsApiResponse getPostComments(
            @PathVariable("postId") Long postId,
            @RequestParam Integer page,
            @RequestParam Integer size,
            @RequestParam(required = false, defaultValue = "createdAt") String sortBy,
            @RequestParam(required = false, defaultValue = "desc") String sortDirection) {
        GetPostCommentsPageApiRequest request = commentConverter.toApiRequest(postId, page, size, sortBy, sortDirection);
        ValidGetPostCommentsPageApiRequest validRequest = commentValidator.validate(request);
        PostComments postComments = commentDao.getPostComments(validRequest);
        return commentConverter.toApiResponse(postComments);
    }
    // @formatter:on

    // @formatter:off
    @Transactional
    @PostMapping("/secure-api/posts/{postId}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPostComment(
            @ModelAttribute IOAuth2User user, 
            @PathVariable("postId") Long postId, 
            @RequestBody CreatePostCommentApiRequestBody requestBody) {
        CreatePostCommentApiRequest request = commentConverter.toApiRequest(user, postId, requestBody);
        ValidCreatePostCommentApiRequest validRequest = commentValidator.validate(request);
        PostCommentToCreate model = commentConverter.toPostCommentToCreate(validRequest);
        ValidPostCommentToCreate validModel = commentValidator.validate(model);
        commentDao.create(validModel);
    }
    // @formatter:on

}

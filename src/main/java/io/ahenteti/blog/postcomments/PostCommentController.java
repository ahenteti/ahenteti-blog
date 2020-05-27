package io.ahenteti.blog.postcomments;

import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.postcomments.model.api.GetPostCommentsApiRequest;
import io.ahenteti.blog.postcomments.model.api.PostCommentsApiResponse;
import io.ahenteti.blog.postcomments.model.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.core.PostComments;
import io.ahenteti.blog.postcomments.model.core.ReadyToCreatePostComment;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import io.ahenteti.blog.postcomments.service.PostCommentConverter;
import io.ahenteti.blog.postcomments.service.PostCommentDao;
import io.ahenteti.blog.postcomments.service.PostCommentValidator;
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
import org.springframework.web.util.UriComponentsBuilder;

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

    @GetMapping(value = "/api/posts/{postId}/comments")
    public PostCommentsApiResponse getPostComments(@PathVariable("postId") Long postId, @RequestParam Integer page, @RequestParam Integer size) {
        GetPostCommentsApiRequest request = commentConverter.toGetPostCommentsApiRequest(postId, page, size);
        commentValidator.validateGetPostCommentsApiRequest(request);
        PostComments postComments = commentDao.getPostComments(request);
        return commentConverter.toPostCommentsApiResponse(postComments);
    }

    @Transactional
    @PostMapping("/secure-api/posts/{postId}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPostComment(UriComponentsBuilder uriComponentsBuilder, @ModelAttribute IOAuth2User user, @PathVariable("postId") Long postId, @RequestBody CreatePostCommentApiRequestBody requestBody) {
        CreatePostCommentApiRequest request = commentConverter.toCreatePostCommentApiRequest(user, postId, requestBody);
        ValidCreatePostCommentApiRequest validRequest = commentValidator.validateCreateCommentApiRequest(request);
        ReadyToCreatePostComment comment = commentConverter.toPostComment(validRequest);
        commentDao.createComment(comment);
    }

}

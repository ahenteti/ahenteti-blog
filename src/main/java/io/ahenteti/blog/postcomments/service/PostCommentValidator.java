package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.api.ValidGetPostCommentsPageApiRequest;
import io.ahenteti.blog.shared.exception.InvalidRequirementException;
import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.postcomments.model.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.post.service.PostDao;
import io.ahenteti.blog.shared.service.PageApiRequestValidator;
import io.ahenteti.blog.user.service.UserValidator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static io.ahenteti.blog.shared.exception.ResourceNotFoundException.throwPostNotFoundException;

@Service
public class PostCommentValidator {

    private PageApiRequestValidator pageApiRequestValidator;
    private UserValidator userValidator;
    private PostDao postDao;

    @Autowired
    public PostCommentValidator(PageApiRequestValidator pageApiRequestValidator, UserValidator userValidator, PostDao postDao) {
        this.pageApiRequestValidator = pageApiRequestValidator;
        this.userValidator = userValidator;
        this.postDao = postDao;
    }

    public ValidGetPostCommentsPageApiRequest validate(GetPostCommentsPageApiRequest request) {
        pageApiRequestValidator.validate(request);
        Long postId = request.getPostId();
        postDao.getPostById(postId).orElseThrow(throwPostNotFoundException(postId));
        return new ValidGetPostCommentsPageApiRequest(request);
    }

    public ValidCreatePostCommentApiRequest validateCreateCommentApiRequest(CreatePostCommentApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        validateCommentPostId(request.getPostId());
        validateCommentValue(request);
        return new ValidCreatePostCommentApiRequest(request);
    }

    private void validateCommentValue(CreatePostCommentApiRequest request) {
        if (StringUtils.isBlank(request.getValue())) {
            throw new InvalidRequirementException("comment value is mandatory");
        }
    }

    private void validateCommentPostId(Long postId) {
        if (postId == null) {
            throw new InvalidRequirementException("postId path param is mandatory");
        }
    }

    private void validateCommentSize(GetPostCommentsPageApiRequest request) {
        if (request.getSize() == null) {
            throw new InvalidRequirementException("size query param is mandatory");
        }
    }

    private void validateCommentPage(GetPostCommentsPageApiRequest request) {
        if (request.getPage() == null) {
            throw new InvalidRequirementException("page query param is mandatory");
        }
    }
}

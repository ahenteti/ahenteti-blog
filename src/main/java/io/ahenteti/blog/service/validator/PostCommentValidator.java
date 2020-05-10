package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.api.GetPostCommentsApiRequest;
import io.ahenteti.blog.service.dao.PostDao;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static io.ahenteti.blog.exception.ResourceNotFoundException.throwPostNotFoundException;

@Service
public class PostCommentValidator {

    private UserValidator userValidator;
    private PostDao postDao;

    @Autowired
    public PostCommentValidator(UserValidator userValidator, PostDao postDao) {
        this.userValidator = userValidator;
        this.postDao = postDao;
    }

    public void validateGetPostCommentsApiRequest(GetPostCommentsApiRequest request) {
        validateCommentPostId(request.getPostId());
        validateCommentPage(request);
        validateCommentSize(request);
        Long postId = request.getPostId();
        postDao.getPostById(postId).orElseThrow(throwPostNotFoundException(postId));
    }

    public void validateCreateCommentApiRequest(CreatePostCommentApiRequest request) {
        userValidator.validateUser(request.getAuthor());
        validateCommentPostId(request.getPostId());
        validateCommentValue(request);
    }

    private void validateCommentValue(CreatePostCommentApiRequest request) {
        if (StringUtils.isBlank(request.getValue())) {
            throw new MissingMandatoryRequestAttributeException("comment value is mandatory");
        }
    }

    private void validateCommentPostId(Long postId) {
        if (postId == null) {
            throw new MissingMandatoryRequestAttributeException("postId path param is mandatory");
        }
    }

    private void validateCommentSize(GetPostCommentsApiRequest request) {
        if (request.getSize() == null) {
            // this mean that spring framework ignores the defaultValue set on this query param :(
            throw new MissingMandatoryRequestAttributeException("size query param is mandatory");
        }
    }

    private void validateCommentPage(GetPostCommentsApiRequest request) {
        if (request.getPage() == null) {
            throw new MissingMandatoryRequestAttributeException("page query param is mandatory");
        }
    }
}

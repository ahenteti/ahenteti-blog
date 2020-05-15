package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.InvalidRequestAttributeException;
import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.post.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidUpdatePostApiRequest;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PostValidator {

    private UserValidator userValidator;

    @Autowired
    public PostValidator(UserValidator userValidator) {
        this.userValidator = userValidator;
    }

    public ValidCreatePostApiRequest validateCreatePostApiRequest(CreatePostApiRequest request) {
        userValidator.validateUser(request.getAuthor());
        validateTitle(request.getTitle());
        validateCategory(request.getCategory());
        validateTags(request.getTags());
        validateBody(request.getBodyMarkdownBase64());
        return new ValidCreatePostApiRequest(request);
    }

    public ValidUpdatePostApiRequest validateUpdatePostApiRequest(UpdatePostApiRequest request) {
        userValidator.validateUser(request.getAuthor());
        validateId(request.getId());
        validateTitle(request.getTitle());
        validateCategory(request.getCategory());
        validateTags(request.getTags());
        validateBody(request.getBodyMarkdownBase64());
        validateCreatedAt(request.getCreatedAt());
        return new ValidUpdatePostApiRequest(request);
    }

    private void validateId(Long id) {
        if (id == null) {
            throw new MissingMandatoryRequestAttributeException("post id is mandatory");
        }
    }

    private void validateTitle(String title) {
        if (StringUtils.isBlank(title)) {
            throw new MissingMandatoryRequestAttributeException("post title is mandatory");
        }
    }

    private void validateCategory(String category) {
        if (StringUtils.isBlank(category)) {
            throw new MissingMandatoryRequestAttributeException("post category is mandatory");
        }
    }

    private void validateTags(List<String> tags) {
        if (CollectionUtils.isEmpty(tags)) {
            throw new MissingMandatoryRequestAttributeException("post tags is mandatory");
        }
    }

    private void validateBody(String body) {
        if (StringUtils.isBlank(body)) {
            throw new MissingMandatoryRequestAttributeException("post body is mandatory");
        }
    }

    private void validateCreatedAt(Instant createdAt) {
        if (createdAt == null) {
            throw new MissingMandatoryRequestAttributeException("post createdAt is mandatory");
        }
        if (createdAt.isAfter(Instant.now())) {
            throw new InvalidRequestAttributeException("post createdAt is invalid: is after now!");
        }
    }

}

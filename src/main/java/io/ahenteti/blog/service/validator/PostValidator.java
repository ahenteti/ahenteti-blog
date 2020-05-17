package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.InvalidRequestAttributeException;
import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.post.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.dao.repository.PostBodyRepository;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class PostValidator {

    private UserValidator userValidator;
    private PostRepository postRepository;
    private PostBodyRepository postBodyRepository;

    @Autowired
    public PostValidator(UserValidator userValidator, PostRepository postRepository, PostBodyRepository postBodyRepository) {
        this.userValidator = userValidator;
        this.postRepository = postRepository;
        this.postBodyRepository = postBodyRepository;
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
        PostEntity postEntity = validateId(request.getId());
        validateTitle(request.getTitle());
        validateCategory(request.getCategory());
        validateTags(request.getTags());
        validateBody(request.getBodyMarkdownBase64());
        validateCreatedAt(request.getCreatedAtIso8601());
        return new ValidUpdatePostApiRequest(request, postEntity);
    }

    private PostEntity validateId(Long id) {
        if (id == null) {
            throw new MissingMandatoryRequestAttributeException("post id is mandatory");
        }
        Optional<PostEntity> postOptional = postRepository.findById(id);
        if (!postOptional.isPresent()) {
            throw new InvalidRequestAttributeException("post with id: " + id + " does not exist");
        }
        return postOptional.get();
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

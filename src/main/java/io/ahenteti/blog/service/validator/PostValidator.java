package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.InvalidRequirementException;
import io.ahenteti.blog.model.api.post.request.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.model.core.post.EPostsGroupByStrategyName;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.repository.PostRepository;
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

    @Autowired
    public PostValidator(UserValidator userValidator, PostRepository postRepository) {
        this.userValidator = userValidator;
        this.postRepository = postRepository;
    }

    public ValidCreatePostApiRequest validateCreatePostApiRequest(CreatePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        validateTitle(request.getTitle());
        validateCategory(request.getCategory());
        validateTags(request.getTags());
        validateBody(request.getBodyMarkdownBase64());
        return new ValidCreatePostApiRequest(request);
    }

    public ValidUpdatePostApiRequest validateUpdatePostApiRequest(UpdatePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        PostEntity postEntity = validateId(request.getId());
        validateTitle(request.getTitle());
        validateCategory(request.getCategory());
        validateTags(request.getTags());
        validateBody(request.getBodyMarkdownBase64());
        validateCreatedAt(request.getCreatedAtIso8601());
        return new ValidUpdatePostApiRequest(request, postEntity);
    }

    public ValidDeletePostApiRequest validateDeletePostApiRequest(DeletePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getUser());
        validateId(request.getPostId());
        return new ValidDeletePostApiRequest(request);
    }

    public ValidGetPostsGroupsApiRequest validateGetPostsGroupsApiRequest(GetPostsGroupsApiRequest request) {
        validatePostsGroups(request);
        validatePostsGroupBy(request);
        return new ValidGetPostsGroupsApiRequest(request);
    }

    private void validatePostsGroupBy(GetPostsGroupsApiRequest request) {
        if (StringUtils.isBlank(request.getGroupBy())) {
            throw new InvalidRequirementException("post groupBy is mandatory");
        }
        if (EPostsGroupByStrategyName.getByValue(request.getGroupBy()) == null) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown groupBy query param value: ");
            sb.append(request.getGroupBy());
            sb.append(". Accepted values: ");
            sb.append(StringUtils.join(EPostsGroupByStrategyName.getAcceptedValues(), ", "));
            throw new InvalidRequirementException(sb.toString());
        }
    }

    private void validatePostsGroups(GetPostsGroupsApiRequest request) {
        if (request.getGroups() == null || request.getGroups().isEmpty()) {
            throw new InvalidRequirementException("post groups is mandatory");
        }
    }

    private PostEntity validateId(Long id) {
        if (id == null) {
            throw new InvalidRequirementException("post id is mandatory");
        }
        Optional<PostEntity> postOptional = postRepository.findById(id);
        if (!postOptional.isPresent()) {
            throw new InvalidRequirementException("post with id: " + id + " does not exist");
        }
        return postOptional.get();
    }

    private void validateTitle(String title) {
        if (StringUtils.isBlank(title)) {
            throw new InvalidRequirementException("post title is mandatory");
        }
    }

    private void validateCategory(String category) {
        if (StringUtils.isBlank(category)) {
            throw new InvalidRequirementException("post category is mandatory");
        }
    }

    private void validateTags(List<String> tags) {
        if (CollectionUtils.isEmpty(tags)) {
            throw new InvalidRequirementException("post tags is mandatory");
        }
    }

    private void validateBody(String body) {
        if (StringUtils.isBlank(body)) {
            throw new InvalidRequirementException("post body is mandatory");
        }
    }

    private void validateCreatedAt(Instant createdAt) {
        if (createdAt == null) {
            throw new InvalidRequirementException("post createdAt is mandatory");
        }
        if (createdAt.isAfter(Instant.now())) {
            throw new InvalidRequirementException("post createdAt is invalid: is after now!");
        }
    }

}

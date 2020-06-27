package io.ahenteti.blog.service.postcomments;

import io.ahenteti.blog.core.exception.InvalidObjectStateException;
import io.ahenteti.blog.core.exception.InvalidRequirementException;
import io.ahenteti.blog.core.exception.ResourceNotFoundException;
import io.ahenteti.blog.core.model.post.entity.PostEntity;
import io.ahenteti.blog.core.model.postcomments.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.GetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.ValidCreatePostCommentApiRequest;
import io.ahenteti.blog.core.model.postcomments.api.ValidGetPostCommentsPageApiRequest;
import io.ahenteti.blog.core.model.postcomments.core.PostCommentToCreate;
import io.ahenteti.blog.core.model.postcomments.core.ValidPostCommentToCreate;
import io.ahenteti.blog.core.model.user.entity.UserEntity;
import io.ahenteti.blog.service.post.PostRepository;
import io.ahenteti.blog.service.shared.PageApiRequestValidator;
import io.ahenteti.blog.service.user.UserRepository;
import io.ahenteti.blog.service.user.UserValidator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.function.Supplier;

import static io.ahenteti.blog.core.exception.ResourceNotFoundException.throwPostNotFoundException;


@Service
public class PostCommentValidator {

    private PostCommentConfig commentConfig;
    private PageApiRequestValidator pageApiRequestValidator;
    private UserRepository userRepository;
    private UserValidator userValidator;
    private PostRepository postRepository;

    @Autowired
    public PostCommentValidator(PostCommentConfig commentConfig, PageApiRequestValidator pageApiRequestValidator, UserRepository userRepository, UserValidator userValidator, PostRepository postRepository) {
        this.commentConfig = commentConfig;
        this.pageApiRequestValidator = pageApiRequestValidator;
        this.userRepository = userRepository;
        this.userValidator = userValidator;
        this.postRepository = postRepository;
    }

    public ValidGetPostCommentsPageApiRequest validate(GetPostCommentsPageApiRequest request) {
        pageApiRequestValidator.validate(request);
        return new ValidGetPostCommentsPageApiRequest(request);
    }

    public ValidCreatePostCommentApiRequest validate(CreatePostCommentApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        validateCommentPostSlug(request.getSlug());
        validateCommentValue(request);
        return new ValidCreatePostCommentApiRequest(request);
    }

    public ValidPostCommentToCreate validate(PostCommentToCreate comment) {
        if (comment.getAuthor() == null || comment.getAuthor().getId() == null) {
            throw new InvalidObjectStateException("PostComment.author is mandatory");
        }
        if (StringUtils.isBlank(comment.getValue())) {
            throw new InvalidRequirementException("PostComment.value is mandatory");
        }
        if (StringUtils.length(comment.getValue()) > commentConfig.getMaxValueLength()) {
            throw new InvalidRequirementException("Current comment value length is greater than the authorized maxValueLength. Current comment value length: " + comment
                    .getValue().length() + ", maxValueLength: " + commentConfig.getMaxValueLength());
        }
        if (comment.getCreatedAt() == null) {
            throw new InvalidRequirementException("PostComment.createdAt is mandatory");
        }
        if (comment.getCreatedAt().isAfter(Instant.now())) {
            throw new InvalidRequirementException("PostComment.createdAt must be in the past");
        }
        Long authorId = comment.getAuthor().getId();
        UserEntity author = userRepository.findById(authorId).orElseThrow(throwNotFoundPostException(authorId));
        String slug = comment.getSlug();
        PostEntity post = postRepository.findBySlug(slug).orElseThrow(throwPostNotFoundException(slug));
        return new ValidPostCommentToCreate(comment, author, post);
    }

    private Supplier<ResourceNotFoundException> throwNotFoundPostException(Long authorId) {
        return () -> new ResourceNotFoundException("User not found with id: " + authorId);
    }

    private void validateCommentValue(CreatePostCommentApiRequest request) {
        if (StringUtils.isBlank(request.getValue())) {
            throw new InvalidRequirementException("comment value is mandatory");
        }
    }

    private void validateCommentPostSlug(String slug) {
        if (slug == null) {
            throw new InvalidRequirementException("postSlug path param is mandatory");
        }
    }

}

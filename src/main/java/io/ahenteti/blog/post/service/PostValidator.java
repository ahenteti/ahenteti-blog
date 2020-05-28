package io.ahenteti.blog.post.service;

import io.ahenteti.blog.post.PostConfig;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.ValidGetPostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidCreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidUpdatePostApiRequest;
import io.ahenteti.blog.post.model.core.EPostsGroupByStrategyName;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostToCreate;
import io.ahenteti.blog.post.model.core.PostToUpdate;
import io.ahenteti.blog.post.model.core.ValidPostToCreate;
import io.ahenteti.blog.post.model.core.ValidPostToUpdate;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.shared.exception.InvalidRequirementException;
import io.ahenteti.blog.shared.exception.ResourceNotFoundException;
import io.ahenteti.blog.shared.utils.CollectionValidatorUtils;
import io.ahenteti.blog.user.model.entity.UserEntity;
import io.ahenteti.blog.user.service.UserValidator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.function.Supplier;

import static io.ahenteti.blog.shared.utils.CollectionValidatorUtils.validateNotEmpty;
import static io.ahenteti.blog.shared.utils.InstantValidatorUtils.validateInThePast;
import static io.ahenteti.blog.shared.utils.ObjectValidatorUtils.validateNotNull;
import static io.ahenteti.blog.shared.utils.StringValidatorUtils.validateMaxLength;
import static io.ahenteti.blog.shared.utils.StringValidatorUtils.validateNotBlank;

@Service
public class PostValidator {

    private UserValidator userValidator;
    private PostRepository postRepository;
    private PostDao postDao;
    private PostConfig postConfig;

    @Autowired
    public PostValidator(UserValidator userValidator, PostRepository postRepository, PostDao postDao, PostConfig postConfig) {
        this.userValidator = userValidator;
        this.postRepository = postRepository;
        this.postDao = postDao;
        this.postConfig = postConfig;
    }

    public ValidDeletePostApiRequest validate(DeletePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getUser());
        validateNotNull("DeletePostApiRequest.postId", request.getPostId());
        validatePostsCanOnlyDeletedByAdminsOrTheirOwnAuthors(request);
        return new ValidDeletePostApiRequest(request);
    }

    public ValidGetPostsGroupsApiRequest validate(GetPostsGroupsApiRequest request) {
        validatePostsGroups(request);
        validatePostsGroupBy(request);
        return new ValidGetPostsGroupsApiRequest(request);
    }

    public ValidGetPostApiRequest validate(GetPostApiRequest request) {
        Long postId = request.getPostId();
        Post post = postDao.getPostById(postId).orElseThrow(throwPostNotFoundException(postId));
        return new ValidGetPostApiRequest(post);
    }

    public ValidCreatePostApiRequest validate(CreatePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getAuthor());
        validateNotNull("CreatePostApiRequest.body", request.getBody());
        return new ValidCreatePostApiRequest(request);
    }

    public ValidUpdatePostApiRequest validate(UpdatePostApiRequest request) {
        userValidator.validateAuthenticatedUser(request.getUser());
        validateNotNull("UpdatePostApiRequest.body", request.getBody());
        validateNotNull("UpdatePostApiRequest.postId", request.getPostId());
        validatePostsCanOnlyUpdatedByAdminsOrTheirOwnAuthors(request);
        return new ValidUpdatePostApiRequest(request);
    }

    // @formatter:off
    private void validatePostsCanOnlyDeletedByAdminsOrTheirOwnAuthors(DeletePostApiRequest request) {
        if (request.getUser().isAdmin()) return;
        postRepository.findByIdAndAuthorId(request.getPostId(), request.getUser().getDbId()).orElseThrow(
                () -> new InvalidRequirementException("Posts can only updated by Admins or their own authors")
        );
    }
    // @formatter:on
    
    // @formatter:off
    private void validatePostsCanOnlyUpdatedByAdminsOrTheirOwnAuthors(UpdatePostApiRequest request) {
        if (request.getUser().isAdmin()) return;
        postRepository.findByIdAndAuthorId(request.getPostId(), request.getUser().getDbId()).orElseThrow(
                () -> new InvalidRequirementException("Posts can only updated by Admins or their own authors")
        );
    }
    // @formatter:on

    public ValidPostToCreate validate(PostToCreate post) {
        validateTitle(post.getTitle());
        validateCategory(post.getCategory());
        validateTags(post.getTags());
        validateBody(post.getBody());
        UserEntity author = userValidator.validate(post.getAuthor());
        return new ValidPostToCreate(post, author);
    }

    public ValidPostToUpdate validate(PostToUpdate post) {
        PostEntity postEntity = validateId(post);
        validateTitle(post.getTitle());
        validateCategory(post.getCategory());
        validateTags(post.getTags());
        validateBody(post.getBody());
        validateLastUpdatedAt(post);
        UserEntity author = userValidator.validate(post.getAuthor());
        return new ValidPostToUpdate(post, postEntity, author);
    }

    private PostEntity validateId(PostToUpdate post) {
        Long postId = post.getId();
        validateNotNull("Post.id", postId);
        return postRepository.findById(postId).orElseThrow(throwPostNotFoundException(postId));
    }

    private void validatePostsGroupBy(GetPostsGroupsApiRequest request) {
        validateNotBlank("Post.groupBy", request.getGroupBy());
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

    private void validateTitle(String title) {
        validateNotBlank("Post.title", title);
        validateMaxLength("Post.title", title, postConfig.getMaxTitleLength());
    }

    private void validateCategory(String category) {
        validateNotBlank("Post.category", category);
        validateMaxLength("Post.category", category, postConfig.getMaxCategoryLength());
    }

    private void validateTags(Collection<String> tags) {
        validateNotEmpty("Post.tags", tags);
        CollectionValidatorUtils.validateMaxLength("Post.tags", tags, postConfig.getMaxTagsNumber());
    }

    private void validateBody(String body) {
        validateNotBlank("Post.body", body);
    }

    private void validateLastUpdatedAt(PostToUpdate post) {
        validateNotNull("Post.lastUpdatedAt", post.getLastUpdatedAt());
        validateInThePast("Post.lastUpdatedAt", post.getLastUpdatedAt());
    }

    private Supplier<ResourceNotFoundException> throwPostNotFoundException(Long id) {
        return () -> new ResourceNotFoundException("Post not found with id: " + id);
    }

}

package io.ahenteti.blog.post.service;

import io.ahenteti.blog.post.model.api.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidDeleteUserPostsApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.post.model.core.GroupByPostAuthorStrategy;
import io.ahenteti.blog.post.model.core.GroupByPostCategoryStrategy;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.core.PostsPage;
import io.ahenteti.blog.post.model.core.ValidBulkCreateAndUpdatePostOperations;
import io.ahenteti.blog.post.model.core.ValidPostToCreate;
import io.ahenteti.blog.post.model.core.ValidPostToUpdate;
import io.ahenteti.blog.post.model.entity.PostEntity;
import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
import io.ahenteti.blog.shared.service.PageConverter;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.stream.Collectors;

@Service
public class PostDao {

    private PostRepository postRepository;
    private PostConverter postConverter;
    private PageConverter pageConverter;

    @Autowired
    public PostDao(PostRepository postRepository, PostConverter postConverter, PageConverter pageConverter) {
        this.postRepository = postRepository;
        this.postConverter = postConverter;
        this.pageConverter = pageConverter;
    }

    public PostsGroups getPostsGroups(ValidGetPostsGroupsApiRequest request) {
        List<PostEntity> posts;
        SortedMap<String, List<PostEntity>> map = new TreeMap<>();
        switch (request.getGroupBy()) {
            case CATEGORY:
                posts = postRepository.findByCategoryIn(request.getGroups());
                for (PostEntity post : posts) {
                    map.computeIfAbsent(post.getCategory(), x -> new ArrayList<>()).add(post);
                }
                return postConverter.toPostsGroups(map);
            case AUTHOR:
                posts = postRepository.findByAuthorUsernameIn(request.getGroups());
                for (PostEntity post : posts) {
                    map.computeIfAbsent(post.getAuthor().getUsername(), x -> new ArrayList<>()).add(post);
                }
                return postConverter.toPostsGroups(map);
            default:
                throw new UnsupportedOperationException("not yet implemented");
        }
    }

    public Optional<Post> getPostById(long id) {
        return postRepository.findById(id).map(postConverter::toPost);
    }

    public PostsPage getUserPosts(ValidGetUserPostsApiRequest request) {
        // @formatter:off
        PageRequest pageRequest = pageConverter.toPageRequest(request);
        Page<PostEntity> posts = postRepository.findByAuthorId(request.getUser().getDbId(), request.getSqlFilter(), pageRequest);
        return postConverter.toPostsPage(posts, request);
        // @formatter:on
    }

    public Post create(ValidPostToCreate post) {
        PostEntity entity = postConverter.toEntity(post);
        PostEntity newEntity = postRepository.save(entity);
        return postConverter.toPost(newEntity);
    }

    public Post update(ValidPostToUpdate post) {
        PostEntity entity = postConverter.toEntity(post);
        PostEntity newEntity = postRepository.save(entity);
        return postConverter.toPost(newEntity);
    }

    public void delete(ValidDeletePostApiRequest request) {
        postRepository.deleteById(request.getPostId());
    }

    public void delete(ValidDeleteUserPostsApiRequest request) {
        postRepository.deleteByAuthorId(request.getUser().getDbId());
    }
    
    public List<IGroupByStrategy> getPostGroupByStrategies() {
        List<IGroupByStrategy> res = new ArrayList<>();
        res.add(new GroupByPostCategoryStrategy(new TreeSet<>(postRepository.getPostCategories())));
        res.add(new GroupByPostAuthorStrategy(new TreeSet<>(postRepository.getPostAuthors())));
        return res;
    }

    public List<Post> getAllUserPosts(IOAuth2User user) {
        List<PostEntity> userPosts = postRepository.findByAuthorId(user.getDbId());
        return userPosts.stream().map(postConverter::toPost).collect(Collectors.toList());
    }

    public void createOrUpdate(ValidBulkCreateAndUpdatePostOperations bulkOperations) {
        for (ValidPostToCreate postToCreate : bulkOperations.getPostsToCreate()) {
            create(postToCreate);
        }
        for (ValidPostToUpdate postToUpdate : bulkOperations.getPostsToUpdate()) {
            update(postToUpdate);
        }
    }

}

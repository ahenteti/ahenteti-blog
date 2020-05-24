package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.post.request.valid.ValidDeletePostApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetPostsGroupsApiRequest;
import io.ahenteti.blog.model.api.post.request.valid.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.core.IGroupByStrategy;
import io.ahenteti.blog.model.core.post.GroupByPostAuthorStrategy;
import io.ahenteti.blog.model.core.post.GroupByPostCategoryStrategy;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostsGroups;
import io.ahenteti.blog.model.core.post.PostsPage;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PageConverter;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.TreeSet;

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
        Page<PostEntity> posts = postRepository.findByAuthorId(request.getUser().getPrimaryKey(), request.getSqlFilter(), pageRequest);
        return postConverter.toPostsPage(posts, request);
        // @formatter:on
    }

    public PostEntity createPost(ReadyToCreatePost post) {
        PostEntity entity = postConverter.toPostEntity(post);
        return postRepository.save(entity);
    }

    public PostEntity updatePost(ReadyToUpdatePost post) {
        PostEntity entity = postConverter.toPostEntity(post);
        return postRepository.save(entity);
    }

    public void deletePost(ValidDeletePostApiRequest request) {
        postRepository.deleteById(request.getPostId());
    }

    public List<IGroupByStrategy> getPostGroupByStrategies() {
        List<IGroupByStrategy> res = new ArrayList<>();
        res.add(new GroupByPostCategoryStrategy(new TreeSet<>(postRepository.getPostCategories())));
        res.add(new GroupByPostAuthorStrategy(new TreeSet<>(postRepository.getPostAuthors())));
        return res;
    }
}

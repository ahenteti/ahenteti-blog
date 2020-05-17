package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.post.ValidDeletePostApiRequest;
import io.ahenteti.blog.model.api.post.ValidGetUserPostsApiRequest;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostsSummaries;
import io.ahenteti.blog.model.core.post.PostsSummariesPage;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostDao {

    private PostRepository postRepository;
    private PostConverter postConverter;

    @Autowired
    public PostDao(PostRepository postRepository, PostConverter postConverter) {
        this.postRepository = postRepository;
        this.postConverter = postConverter;
    }

    public PostsSummaries getAllPostsSummaries() {
        return postConverter.toPostsSummaries(postRepository.findAll());
    }

    public Optional<Post> getPostById(long id) {
        return postRepository.findById(id).map(postConverter::toPost);
    }

    public PostsSummariesPage getUserPosts(ValidGetUserPostsApiRequest request) {
        // @formatter:off
        PageRequest postsPage = PageRequest.of(request.getPage(), request.getSize(), Sort.by(request.getSortByValue()).descending());
        Page<PostEntity> posts = postRepository.findByAuthorId(request.getUser().getId(), postsPage);
        return postConverter.toPostsSummariesPage(posts, request);
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
}

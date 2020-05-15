package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.post.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.core.post.PostsSummaries;
import io.ahenteti.blog.model.core.post.ReadyToCreatePost;
import io.ahenteti.blog.model.core.post.ReadyToUpdatePost;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public PostsSummaries getUserPosts(GetUserPostsApiRequest request) {
        PageRequest postsPage = PageRequest.of(request.getPage(), request.getSize(), Sort.by("createdAt").descending());
        List<PostEntity> posts = postRepository.findByAuthorId(request.getUser().getId(), postsPage).getContent();
        return postConverter.toPostsSummaries(posts);
    }

    public PostEntity createPost(ReadyToCreatePost post) {
        return createOrUpdatePost(post);
    }

    public PostEntity updatePost(ReadyToUpdatePost post) {
        return createOrUpdatePost(post);
    }

    private PostEntity createOrUpdatePost(Post post) {
        PostEntity entity = postConverter.toPostEntity(post);
        return postRepository.save(entity);
    }

}

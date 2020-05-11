package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.model.api.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostsSummaries;
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

    public PostsSummaries getPostsSummaries(GetUserPostsApiRequest request) {
        PageRequest postsPage = PageRequest.of(request.getPage(), request.getSize(), Sort.by("createdAt").descending());
        List<PostEntity> posts = postRepository.findAll(postsPage).getContent();
        return postConverter.toPostsSummaries(posts);
    }

}

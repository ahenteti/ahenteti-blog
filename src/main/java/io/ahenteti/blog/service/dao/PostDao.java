package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.exception.ResourceNotFoundException;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        PostsSummaries res = new PostsSummaries();
        for (PostEntity postEntity : postRepository.findAll()) {
            res.add(postConverter.toPostSummary(postEntity));
        }
        return res;
    }

    public Optional<Post> getPostById(long id) {
        return postRepository.findById(id).map(postConverter::toPost);
    }
}

package io.ahenteti.blog.service.dao;

import io.ahenteti.blog.exception.ResourceNotFoundException;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Post getPostById(long id) {
        PostEntity postEntity = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + ""));
        return postConverter.toPost(postEntity);
    }
}

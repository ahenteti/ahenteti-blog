package io.ahenteti.blog.controller;

import io.ahenteti.blog.model.api.PostApiResponse;
import io.ahenteti.blog.model.api.PostsSummariesApiResponse;
import io.ahenteti.blog.model.core.Post;
import io.ahenteti.blog.model.core.PostsSummaries;
import io.ahenteti.blog.service.converter.PostConverter;
import io.ahenteti.blog.service.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    private PostDao postDao;
    private PostConverter postConverter;

    @Autowired
    public PostController(PostDao postDao, PostConverter postConverter) {
        this.postDao = postDao;
        this.postConverter = postConverter;
    }

    @GetMapping("/api/posts-summaries")
    public PostsSummariesApiResponse getPostsSummaries() {
        PostsSummaries postsSummaries = postDao.getAllPostsSummaries();
        return postConverter.toPostsSummariesApiResponse(postsSummaries);
    }

    @GetMapping("/api/posts/{id}")
    public PostApiResponse getPostById(@PathVariable long id) {
        Post post = postDao.getPostById(id);
        return postConverter.toPostApiResponse(post);
    }

}

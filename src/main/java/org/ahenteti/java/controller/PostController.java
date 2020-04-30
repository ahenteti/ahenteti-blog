package org.ahenteti.java.controller;

import org.ahenteti.java.model.api.PostApiResult;
import org.ahenteti.java.model.api.PostSummaryApiResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {
    
    @GetMapping("/api/posts-summaries")
    public List<PostSummaryApiResult> getPostsSummaries() {
        throw new UnsupportedOperationException("not yet implemented");
    }

    @GetMapping("/api/posts/{id}")
    public PostApiResult getPostById(@PathVariable long id) {
        throw new UnsupportedOperationException("not yet implemented");
    }
    
    
    
}

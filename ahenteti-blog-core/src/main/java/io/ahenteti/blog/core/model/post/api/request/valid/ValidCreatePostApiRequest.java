package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.CreatePostApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

import java.util.List;

@Data
public class ValidCreatePostApiRequest {
    private IOAuth2User author;
    protected String title;
    protected String category;
    protected List<String> tags;
    protected String body;

    public ValidCreatePostApiRequest(CreatePostApiRequest request) {
        this.author = request.getAuthor();
        this.title = request.getBody().getTitle();
        this.category = request.getBody().getCategory();
        this.tags = request.getBody().getTags();
        this.body = request.getBody().getBodyMarkdownBase64();
    }
}

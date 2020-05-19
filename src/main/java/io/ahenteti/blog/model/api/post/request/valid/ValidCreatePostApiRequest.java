package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.CreatePostApiRequest;
import lombok.Data;

@Data
public class ValidCreatePostApiRequest extends CreatePostApiRequest {
    public ValidCreatePostApiRequest(CreatePostApiRequest request) {
        this.title = request.getTitle();
        this.category = request.getCategory();
        this.tags = request.getTags();
        this.bodyMarkdownBase64 = request.getBodyMarkdownBase64();
        this.author = request.getAuthor();
    }
}
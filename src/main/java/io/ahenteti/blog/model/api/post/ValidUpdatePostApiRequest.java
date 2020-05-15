package io.ahenteti.blog.model.api.post;

import lombok.Data;

@Data
public class ValidUpdatePostApiRequest extends UpdatePostApiRequest {
    public ValidUpdatePostApiRequest(UpdatePostApiRequest request) {
        this.id = request.getId();
        this.title = request.getTitle();
        this.category = request.getCategory();
        this.tags = request.getTags();
        this.bodyMarkdownBase64 = request.getBodyMarkdownBase64();
        this.author = request.getAuthor();
        this.createdAt = request.getCreatedAt();
    }
}

package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequest;
import io.ahenteti.blog.model.entity.PostEntity;
import lombok.Data;

@Data
public class ValidUpdatePostApiRequest extends UpdatePostApiRequest {
    private final PostEntity postEntity;

    public ValidUpdatePostApiRequest(UpdatePostApiRequest request, PostEntity postEntity) {
        this.id = request.getId();
        this.title = request.getTitle();
        this.category = request.getCategory();
        this.tags = request.getTags();
        this.bodyMarkdownBase64 = request.getBodyMarkdownBase64();
        this.author = request.getAuthor();
        this.createdAtIso8601 = request.getCreatedAtIso8601();
        this.postEntity = postEntity;
    }
}

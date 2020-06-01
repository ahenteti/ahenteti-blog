package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;

import java.util.List;

@Data
public class ValidUpdatePostApiRequest {

    private Long postId;
    private IOAuth2User author;
    protected String title;
    protected String category;
    protected List<String> tags;
    protected String body;

    public ValidUpdatePostApiRequest(UpdatePostApiRequest request) {
        this.postId = request.getPostId();
        this.author = request.getUser();
        this.title = request.getBody().getTitle();
        this.category = request.getBody().getCategory();
        this.tags = request.getBody().getTags();
        this.body = request.getBody().getBodyMarkdownBase64();
    }
}

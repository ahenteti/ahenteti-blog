package io.ahenteti.blog.core.model.post.api.request;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UpdatePostApiRequestBody {
    protected Boolean publish;
    protected String title;
    protected String category;
    protected List<String> tags = new ArrayList<>();
    protected String bodyMarkdownBase64;
}

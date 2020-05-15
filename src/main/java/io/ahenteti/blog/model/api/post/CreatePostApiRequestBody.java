package io.ahenteti.blog.model.api.post;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CreatePostApiRequestBody {
    protected String title;
    protected String category;
    protected List<String> tags = new ArrayList<>();
    protected String bodyMarkdownBase64;
}

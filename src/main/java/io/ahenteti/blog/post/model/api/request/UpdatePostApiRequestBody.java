package io.ahenteti.blog.post.model.api.request;

import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
public class UpdatePostApiRequestBody {
    protected String title;
    protected String category;
    protected List<String> tags = new ArrayList<>();
    protected String bodyMarkdownBase64;
    protected Instant createdAtIso8601;
}

package io.ahenteti.blog.model.api;

import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
public class UpdatePostApiRequestBody {
    private String title;
    private String category;
    private List<String> tags = new ArrayList<>();
    private String bodyMarkdownBase64;
    private Instant createdAt;
}

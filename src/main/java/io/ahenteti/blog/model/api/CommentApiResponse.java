package io.ahenteti.blog.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommentApiResponse {
    private String author;
    private String createdAtIso8601;
    private String value;
}
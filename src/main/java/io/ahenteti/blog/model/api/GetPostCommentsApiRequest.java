package io.ahenteti.blog.model.api;

import lombok.Data;

@Data
public class GetPostCommentsApiRequest {
    private Long postId;
    private Integer page;
    private Integer size;
}

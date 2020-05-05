package io.ahenteti.blog.model.api;

import lombok.Data;

@Data
public class CommentApiRequest {
    
    private Long postId;
    private String value;
    
}

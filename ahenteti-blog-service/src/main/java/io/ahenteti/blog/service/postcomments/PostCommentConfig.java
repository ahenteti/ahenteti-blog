package io.ahenteti.blog.service.postcomments;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "post.comment")
public class PostCommentConfig {

    private Integer maxValueLength = 250;

}

package io.ahenteti.blog.post;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "post")
public class PostConfig {

    private Integer maxTitleLength = 250;
    private Integer maxCategoryLength = 50;
    private Integer maxTagLength = 25;
    private Integer maxTagsNumber = 5;

}

package io.ahenteti.blog.service.post;

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
    private PostBulkOperationsConfig bulkOperation = new PostBulkOperationsConfig();

    @Data
    @ConfigurationProperties(prefix = "bulk.operations")
    public static class PostBulkOperationsConfig {
        private Integer maxCreate = 20;
        private Integer maxUpdate = 20;
    }

}

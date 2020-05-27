package io.ahenteti.blog.feedback;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "feedback")
public class FeedbackConfig {

    private Integer maxValueLength = 250;

}

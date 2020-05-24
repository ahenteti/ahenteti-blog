package io.ahenteti.blog.model.api.feedback;

import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class CreateFeedbackApiRequest {
    protected IOAuth2User author;
    protected String value;
}

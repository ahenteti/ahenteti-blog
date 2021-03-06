package io.ahenteti.blog.core.model.post.api.request;

import io.ahenteti.blog.core.model.user.oauth2.IOAuth2User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class BulkCreateAndUpdatePostOperationsApiRequest {
    private IOAuth2User user;
    private MultipartFile file;
}

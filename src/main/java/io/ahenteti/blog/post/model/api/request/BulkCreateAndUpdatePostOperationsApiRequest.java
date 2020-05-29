package io.ahenteti.blog.post.model.api.request;

import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class BulkCreateAndUpdatePostOperationsApiRequest {
    private IOAuth2User user;
    private MultipartFile file;
}

package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.post.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToUpdatePostApiRequestConverter {

    public UpdatePostApiRequest toUpdatePostApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest res = new UpdatePostApiRequest();
        res.setId(id);
        res.setTitle(requestBody.getTitle());
        res.setCategory(requestBody.getCategory());
        res.setTags(requestBody.getTags());
        res.setBodyMarkdownBase64(requestBody.getBodyMarkdownBase64());
        res.setAuthor(user);
        res.setCreatedAtIso8601(requestBody.getCreatedAtIso8601());
        return res;
    }
}

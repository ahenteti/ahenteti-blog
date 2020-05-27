package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
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

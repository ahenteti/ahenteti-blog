package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.UpdatePostApiRequest;
import io.ahenteti.blog.model.api.UpdatePostApiRequestBody;
import io.ahenteti.blog.model.core.IUser;
import org.springframework.stereotype.Service;

@Service
public class ToUpdatePostApiRequestConverter {

    public UpdatePostApiRequest toUpdatePostApiRequest(IUser user, Long id, UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest res = new UpdatePostApiRequest();
        res.setId(id);
        res.setTitle(requestBody.getTitle());
        res.setCategory(requestBody.getCategory());
        res.setTags(requestBody.getTags());
        res.setBodyMarkdownBase64(requestBody.getBodyMarkdownBase64());
        res.setAuthor(user);
        res.setCreatedAt(requestBody.getCreatedAt());
        return res;
    }
}

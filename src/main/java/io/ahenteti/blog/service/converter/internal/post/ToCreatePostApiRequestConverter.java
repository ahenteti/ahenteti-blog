package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.CreatePostApiRequest;
import io.ahenteti.blog.model.api.CreatePostApiRequestBody;
import io.ahenteti.blog.model.core.IUser;
import org.springframework.stereotype.Service;

@Service
public class ToCreatePostApiRequestConverter {

    public CreatePostApiRequest toCreatePostApiRequestBody(IUser user, CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest res = new CreatePostApiRequest();
        res.setTitle(requestBody.getTitle());
        res.setCategory(requestBody.getCategory());
        res.setTags(requestBody.getTags());
        res.setBodyMarkdownBase64(requestBody.getBodyMarkdownBase64());
        res.setAuthor(user);
        return res;
    }
}

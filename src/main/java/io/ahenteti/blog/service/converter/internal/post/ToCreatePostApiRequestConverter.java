package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.CreatePostApiRequest;
import io.ahenteti.blog.model.api.post.CreatePostApiRequestBody;
import io.ahenteti.blog.model.core.user.IUser;
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

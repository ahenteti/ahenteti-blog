package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToCreatePostApiRequestConverter {

    public CreatePostApiRequest toCreatePostApiRequestBody(IOAuth2User user, CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest res = new CreatePostApiRequest();
        res.setTitle(requestBody.getTitle());
        res.setCategory(requestBody.getCategory());
        res.setTags(requestBody.getTags());
        res.setBodyMarkdownBase64(requestBody.getBodyMarkdownBase64());
        res.setAuthor(user);
        return res;
    }
}

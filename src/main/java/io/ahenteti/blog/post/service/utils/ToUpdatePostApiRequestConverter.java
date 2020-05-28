package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToUpdatePostApiRequestConverter {

    public UpdatePostApiRequest toApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest res = new UpdatePostApiRequest();
        res.setPostId(id);
        res.setAuthor(user);
        res.setBody(requestBody);
        return res;
    }
}

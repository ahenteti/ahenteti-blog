package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToDeletePostApiRequestConverter {

    public DeletePostApiRequest toDeletePostApiRequest(IOAuth2User user, Long postId) {
        DeletePostApiRequest res = new DeletePostApiRequest();
        res.setUser(user);
        res.setPostId(postId);
        return res;
    }
}

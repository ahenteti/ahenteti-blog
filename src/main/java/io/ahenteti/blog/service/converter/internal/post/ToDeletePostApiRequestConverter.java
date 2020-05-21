package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.request.DeletePostApiRequest;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
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

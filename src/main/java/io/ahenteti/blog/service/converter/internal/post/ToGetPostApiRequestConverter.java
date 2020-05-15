package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.user.IUser;
import org.springframework.stereotype.Service;

@Service
public class ToGetPostApiRequestConverter {

    public GetUserPostsApiRequest toGetUserPostsApiRequest(IUser user, Integer page, Integer size) {
        GetUserPostsApiRequest res = new GetUserPostsApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        return res;
    }

}

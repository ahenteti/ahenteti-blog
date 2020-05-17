package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.user.IUser;
import org.springframework.stereotype.Service;

@Service
public class ToGetUserPostsApiRequestConverter {

    public GetUserPostsApiRequest toGetUserPostsApiRequest(IUser user, Integer page, Integer size, String sortBy) {
        GetUserPostsApiRequest res = new GetUserPostsApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        return res;
    }

}

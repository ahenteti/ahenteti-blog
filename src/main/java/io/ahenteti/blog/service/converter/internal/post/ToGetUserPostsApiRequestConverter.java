package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.request.GetUserPostsApiRequest;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToGetUserPostsApiRequestConverter {

    public GetUserPostsApiRequest toGetUserPostsApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy) {
        GetUserPostsApiRequest res = new GetUserPostsApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        return res;
    }

}

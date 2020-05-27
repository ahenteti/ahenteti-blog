package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToGetUserPostsPageApiRequestConverter {

    public GetUserPostsPageApiRequest toGetUserPostsPageApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        GetUserPostsPageApiRequest res = new GetUserPostsPageApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        res.setFilter(filter);
        return res;
    }

}

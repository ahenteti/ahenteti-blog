package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.request.GetPostsGroupsApiRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToGetPostsGroupsApiRequestConverter {

    public GetPostsGroupsApiRequest toGetPostsGroupsApiRequest(List<String> groups, String groupBy) {
        GetPostsGroupsApiRequest res = new GetPostsGroupsApiRequest();
        res.setGroups(groups);
        res.setGroupBy(groupBy);
        return res;
    }
}
package io.ahenteti.blog.post.service.helper;

import io.ahenteti.blog.post.model.api.request.CreatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.CreatePostApiRequestBody;
import io.ahenteti.blog.post.model.api.request.DeletePostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostApiRequest;
import io.ahenteti.blog.post.model.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.post.model.api.request.GetUserPostsPageApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequest;
import io.ahenteti.blog.post.model.api.request.UpdatePostApiRequestBody;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostApiRequestConverter {

    public GetUserPostsPageApiRequest toApiRequest(IOAuth2User user, Integer page, Integer size, String sortBy, String sortDirection, String filter) {
        GetUserPostsPageApiRequest res = new GetUserPostsPageApiRequest();
        res.setUser(user);
        res.setPage(page);
        res.setSize(size);
        res.setSortBy(sortBy);
        res.setSortDirection(sortDirection);
        res.setFilter(filter);
        return res;
    }

    public CreatePostApiRequest toApiRequest(IOAuth2User user, CreatePostApiRequestBody requestBody) {
        CreatePostApiRequest res = new CreatePostApiRequest();
        res.setBody(requestBody);
        res.setAuthor(user);
        return res;
    }

    public UpdatePostApiRequest toApiRequest(IOAuth2User user, Long id, UpdatePostApiRequestBody requestBody) {
        UpdatePostApiRequest res = new UpdatePostApiRequest();
        res.setPostId(id);
        res.setUser(user);
        res.setBody(requestBody);
        return res;
    }

    public DeletePostApiRequest toApiRequest(IOAuth2User user, Long postId) {
        DeletePostApiRequest res = new DeletePostApiRequest();
        res.setUser(user);
        res.setPostId(postId);
        return res;
    }

    public GetPostsGroupsApiRequest toApiRequest(List<String> groups, String groupBy) {
        GetPostsGroupsApiRequest res = new GetPostsGroupsApiRequest();
        res.setGroups(groups);
        res.setGroupBy(groupBy);
        return res;
    }

    public GetPostApiRequest toApiRequest(Long postId) {
        GetPostApiRequest res = new GetPostApiRequest();
        res.setPostId(postId);
        return res;
    }
}

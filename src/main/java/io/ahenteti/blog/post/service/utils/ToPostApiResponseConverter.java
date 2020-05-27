package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.response.PostApiResponse;
import io.ahenteti.blog.post.model.core.Post;
import io.ahenteti.blog.user.service.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostApiResponseConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostApiResponseConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostApiResponse toPostApiResponse(Post post) {
        PostApiResponse res = new PostApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setAuthor(userConverter.toAuthorApiResponse(post.getAuthor()));
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }
}

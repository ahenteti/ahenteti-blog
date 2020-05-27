package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.response.UserPostApiResponse;
import io.ahenteti.blog.post.model.core.Post;
import org.springframework.stereotype.Service;

@Service
public class ToUserPostSummaryApiResponseConverter {

    public UserPostApiResponse toUserPostApiResponse(Post post) {
        UserPostApiResponse res = new UserPostApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }
}

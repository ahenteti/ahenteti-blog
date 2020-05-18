package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.response.PostApiResponse;
import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.service.converter.UserConverter;
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
        res.setAuthor(userConverter.toUserApiResponse(post.getAuthor()));
        res.setBodyMarkdownBase64(post.getBody());
        return res;
    }
}

package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.PostSummaryApiResponse;
import io.ahenteti.blog.model.core.post.PostSummary;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostSummaryApiResponseConverter {

    private UserConverter userConverter;

    @Autowired
    public ToPostSummaryApiResponseConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public PostSummaryApiResponse toPostSummaryApiResponse(PostSummary post) {
        PostSummaryApiResponse res = new PostSummaryApiResponse();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(post.getTags());
        res.setCreatedAtIso8601(post.getCreatedAt().toString());
        post.getLastUpdatedAt().ifPresent(date -> res.setLastUpdatedAtIso8601(date.toString()));
        res.setAuthor(userConverter.toUserApiResponse(post.getAuthor()));
        return res;
    }
}

package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.response.UserPostsApiResponse;
import io.ahenteti.blog.model.core.post.PostsSummariesPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ToUserPostsApiResponseConverter {

    private ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter;

    @Autowired
    public ToUserPostsApiResponseConverter(ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter) {
        this.toPostSummaryApiResponseConverter = toPostSummaryApiResponseConverter;
    }

    public UserPostsApiResponse toUserPostsApiResponse(PostsSummariesPage postsPage) {
        UserPostsApiResponse res = new UserPostsApiResponse();
        res.setPage(postsPage.getPage());
        res.setSize(postsPage.getSize());
        res.setTotalItems(postsPage.getTotalItems());
        res.setItems(postsPage.getItems().stream().map(toPostSummaryApiResponseConverter::toPostSummaryApiResponse)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

}

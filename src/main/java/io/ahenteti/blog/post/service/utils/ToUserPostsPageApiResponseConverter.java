package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.response.UserPostsPageApiResponse;
import io.ahenteti.blog.post.model.core.PostsPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ToUserPostsPageApiResponseConverter {

    private ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter;

    @Autowired
    public ToUserPostsPageApiResponseConverter(ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter) {
        this.toPostSummaryApiResponseConverter = toPostSummaryApiResponseConverter;
    }

    public UserPostsPageApiResponse toUserPostsPageApiResponse(PostsPage postsPage) {
        UserPostsPageApiResponse res = new UserPostsPageApiResponse();
        res.setPage(postsPage.getPage());
        res.setSize(postsPage.getSize());
        res.setTotalItems(postsPage.getTotalItems());
        res.setItems(postsPage.getItems().stream().map(toPostSummaryApiResponseConverter::toPostSummaryApiResponse)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

}

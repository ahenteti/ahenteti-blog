package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.ValidPageApiRequest;
import io.ahenteti.blog.model.core.post.PostsPage;
import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ToPostsPageConverter {

    private ToPostSummaryConverter toPostSummaryConverter;

    @Autowired
    public ToPostsPageConverter(ToPostSummaryConverter toPostSummaryConverter) {
        this.toPostSummaryConverter = toPostSummaryConverter;
    }

    public PostsPage toPostsPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        PostsPage res = new PostsPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(posts.getTotalElements());
        res.setItems(posts.getContent().stream().map(toPostSummaryConverter::toPostSummary)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

}

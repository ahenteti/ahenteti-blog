package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.request.valid.ValidPageApiRequest;
import io.ahenteti.blog.model.core.post.PostsSummariesPage;
import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ToPostsSummariesPageConverter {

    private ToPostSummaryConverter toPostSummaryConverter;

    @Autowired
    public ToPostsSummariesPageConverter(ToPostSummaryConverter toPostSummaryConverter) {
        this.toPostSummaryConverter = toPostSummaryConverter;
    }

    public PostsSummariesPage toPostsSummariesPage(Page<PostEntity> posts, ValidPageApiRequest request) {
        PostsSummariesPage res = new PostsSummariesPage();
        res.setPage(request.getPage());
        res.setSize(request.getSize());
        res.setSortBy(request.getSortByValue());
        res.setTotalItems(posts.getTotalElements());
        res.setItems(posts.getContent().stream().map(toPostSummaryConverter::toPostSummary)
                .collect(Collectors.toCollection(ArrayList::new)));
        return res;
    }

}

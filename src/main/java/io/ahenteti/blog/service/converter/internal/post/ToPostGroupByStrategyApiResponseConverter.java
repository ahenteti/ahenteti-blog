package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.response.PostGroupByStrategyApiResponse;
import io.ahenteti.blog.model.core.IGroupByStrategy;
import org.springframework.stereotype.Service;

@Service
public class ToPostGroupByStrategyApiResponseConverter {

    public PostGroupByStrategyApiResponse toPostGroupByStrategiesApiResponse(IGroupByStrategy strategy) {
        PostGroupByStrategyApiResponse res = new PostGroupByStrategyApiResponse();
        res.setName(strategy.getName());
        res.setValues(strategy.getValues());
        return res;
    }
}

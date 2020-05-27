package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.api.response.PostGroupByStrategyApiResponse;
import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
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

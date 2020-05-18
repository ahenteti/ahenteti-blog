package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.response.PostGroupByStrategiesApiResponse;
import io.ahenteti.blog.model.core.IGroupByStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToPostGroupByStrategiesApiResponseConverter {

    private final ToPostGroupByStrategyApiResponseConverter toPostGroupByStrategyApiResponseConverter;

    @Autowired
    public ToPostGroupByStrategiesApiResponseConverter(ToPostGroupByStrategyApiResponseConverter toPostGroupByStrategyApiResponseConverter) {
        this.toPostGroupByStrategyApiResponseConverter = toPostGroupByStrategyApiResponseConverter;
    }

    public PostGroupByStrategiesApiResponse toPostGroupByStrategiesApiResponse(List<IGroupByStrategy> strategies) {
        PostGroupByStrategiesApiResponse res = new PostGroupByStrategiesApiResponse();
        for (IGroupByStrategy strategy : strategies) {
            res.add(toPostGroupByStrategyApiResponseConverter.toPostGroupByStrategiesApiResponse(strategy));
        }
        return res;
    }
}

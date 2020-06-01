package io.ahenteti.blog.core.model.post.api.request.valid;

import io.ahenteti.blog.core.model.post.api.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.core.model.post.core.EPostsGroupByStrategyName;
import lombok.Data;

import java.util.List;

@Data
public class ValidGetPostsGroupsApiRequest {
    private List<String> groups;
    private EPostsGroupByStrategyName groupBy;

    public ValidGetPostsGroupsApiRequest(GetPostsGroupsApiRequest request) {
        this.groups = request.getGroups();
        this.groupBy = EPostsGroupByStrategyName.getByValue(request.getGroupBy());
    }
}

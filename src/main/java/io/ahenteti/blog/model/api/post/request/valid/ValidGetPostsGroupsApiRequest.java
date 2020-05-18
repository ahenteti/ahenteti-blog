package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.api.post.request.GetPostsGroupsApiRequest;
import io.ahenteti.blog.model.core.post.EPostsGroupByStrategyName;
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

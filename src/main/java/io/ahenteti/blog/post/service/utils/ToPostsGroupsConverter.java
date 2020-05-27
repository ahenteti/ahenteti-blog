package io.ahenteti.blog.post.service.utils;

import io.ahenteti.blog.post.model.core.PostsGroup;
import io.ahenteti.blog.post.model.core.PostsGroups;
import io.ahenteti.blog.post.model.entity.PostEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.SortedMap;
import java.util.stream.Collectors;

@Service
public class ToPostsGroupsConverter {

    private ToPostSummaryConverter toPostSummaryConverter;

    @Autowired
    public ToPostsGroupsConverter(ToPostSummaryConverter toPostSummaryConverter) {
        this.toPostSummaryConverter = toPostSummaryConverter;
    }

    public PostsGroups toPostsGroups(SortedMap<String, List<PostEntity>> map) {
        PostsGroups res = new PostsGroups();
        for (Map.Entry<String, List<PostEntity>> entry : map.entrySet()) {
            PostsGroup group = new PostsGroup();
            group.setGroupName(entry.getKey());
            group.setPosts(entry.getValue().stream().map(toPostSummaryConverter::toPostSummary)
                    .collect(Collectors.toList()));
            res.add(group);
        }
        return res;
    }
}

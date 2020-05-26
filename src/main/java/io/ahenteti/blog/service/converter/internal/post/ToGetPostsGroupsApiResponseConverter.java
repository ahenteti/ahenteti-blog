package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.api.post.response.PostsGroupApiResponse;
import io.ahenteti.blog.model.api.post.response.PostsGroupsApiResponse;
import io.ahenteti.blog.model.core.post.PostsGroup;
import io.ahenteti.blog.model.core.post.PostsGroups;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ToGetPostsGroupsApiResponseConverter {

    private ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter;

    @Autowired
    public ToGetPostsGroupsApiResponseConverter(ToPostSummaryApiResponseConverter toPostSummaryApiResponseConverter) {
        this.toPostSummaryApiResponseConverter = toPostSummaryApiResponseConverter;
    }

    public PostsGroupsApiResponse toGetPostsGroupsApiResponse(PostsGroups posts) {
        PostsGroupsApiResponse res = new PostsGroupsApiResponse();
        for (PostsGroup postsGroup : posts) {
            PostsGroupApiResponse postsGroupApiResponse = new PostsGroupApiResponse();
            postsGroupApiResponse.setName(postsGroup.getGroupName());
            postsGroupApiResponse.setPosts(postsGroup.getPosts().stream()
                    .map(toPostSummaryApiResponseConverter::toPostSummaryApiResponse)
                    .collect(Collectors.toCollection(ArrayList::new)));
            res.add(postsGroupApiResponse);
        }
        return res;
    }
}

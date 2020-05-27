package io.ahenteti.blog.postcomments.model.api;

import io.ahenteti.blog.postcomments.model.core.EPostCommentsSortBy;
import io.ahenteti.blog.shared.model.api.PageApiRequest;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetPostCommentsPageApiRequest extends PageApiRequest {
    private Long postId;
    
    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EPostCommentsSortBy.values()).map(EPostCommentsSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

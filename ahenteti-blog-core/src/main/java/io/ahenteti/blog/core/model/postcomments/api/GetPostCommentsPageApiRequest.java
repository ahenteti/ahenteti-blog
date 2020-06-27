package io.ahenteti.blog.core.model.postcomments.api;

import io.ahenteti.blog.core.model.postcomments.core.EPostCommentsSortBy;
import io.ahenteti.blog.core.model.shared.api.PageApiRequest;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GetPostCommentsPageApiRequest extends PageApiRequest {
    private String slug;
    
    @Override
    public List<String> getSortByAcceptedValues() {
        return Arrays.stream(EPostCommentsSortBy.values()).map(EPostCommentsSortBy::getValue)
                .collect(Collectors.toCollection(ArrayList::new));
    }
}

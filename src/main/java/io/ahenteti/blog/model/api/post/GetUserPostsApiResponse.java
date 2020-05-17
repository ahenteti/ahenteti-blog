package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.api.PageApiResponse;
import lombok.Data;

@Data
public class GetUserPostsApiResponse extends PageApiResponse<PostSummaryApiResponse> {

}

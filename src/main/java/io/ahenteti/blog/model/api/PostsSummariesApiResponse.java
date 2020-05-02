package io.ahenteti.blog.model.api;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.ArrayList;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostsSummariesApiResponse extends ArrayList<PostSummaryApiResponse> {
}

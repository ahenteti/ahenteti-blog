package io.ahenteti.blog.model.api;

import lombok.Data;

import java.util.List;

@Data
public abstract class PageApiRequest {
    private Integer page;
    private Integer size;
    private String sortBy;
    private String sortDirection;
    private String filter;
    public abstract List<String> getSortByAcceptedValues();
}

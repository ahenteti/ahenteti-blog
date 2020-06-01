package io.ahenteti.blog.core.model.shared.api;

import lombok.Data;

import java.util.Collection;

@Data
public class PageApiResponse<T> {
    private Integer page;
    private Integer size;
    private Collection<T> items;
    private Long totalItems;

    public Boolean getLastPage() {
        return (page + 1) * size >= totalItems;
    }
}

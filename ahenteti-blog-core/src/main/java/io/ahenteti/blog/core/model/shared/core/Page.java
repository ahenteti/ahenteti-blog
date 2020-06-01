package io.ahenteti.blog.core.model.shared.core;

import lombok.Data;

import java.util.Collection;

@Data
public class Page<T> {
    private Integer page;
    private Integer size;
    private String sortBy;
    private Collection<T> items;
    private Long totalItems;
}

package io.ahenteti.blog.shared.model.api;

import io.ahenteti.blog.shared.model.core.ESortDirection;
import io.ahenteti.blog.shared.model.core.ISortBy;
import lombok.Data;

@Data
public class ValidPageApiRequest<T extends ISortBy> {

    private Integer page;
    private Integer size;
    private String filter;
    private T sortBy;
    private ESortDirection direction;

    public ValidPageApiRequest(PageApiRequest request, T sortBy) {
        setPage(request.getPage());
        setSize(request.getSize());
        setFilter(request.getFilter());
        setSortBy(sortBy);
        setDirection(ESortDirection.getByValue(request.getSortDirection()));
    }

    public void setSortBy(T sortBy) {
        if (sortBy == null) {
            throw new IllegalStateException("the sortBy attribute must not be null on a valid API request");
        }
        this.sortBy = sortBy;
    }

    public void setDirection(ESortDirection direction) {
        if (direction == null) {
            throw new IllegalStateException("the direction attribute must not be null on a valid API request");
        }
        this.direction = direction;
    }

    public String getSortByValue() {
        return this.sortBy.getValue();
    }

    public String getSqlFilter() {
        return "%" + this.filter + "%";
    }

}

package io.ahenteti.blog.model.api.post;

import io.ahenteti.blog.model.core.user.IUser;
import lombok.Data;

@Data
public class ValidPageApiRequest<T extends ISortBy> {

    protected IUser user;
    protected Integer page;
    protected Integer size;
    protected T sortBy;

    public T getSortBy() {
        if (sortBy == null) {
            throw new IllegalStateException("the sortBy attribute must not be null on a valid API request");
        }
        return sortBy;
    }

    public String getSortByValue() {
        return this.sortBy.getValue();
    }
}

package io.ahenteti.blog.model.api.post.request.valid;

import io.ahenteti.blog.model.core.ISortBy;
import io.ahenteti.blog.model.core.user.oauth2.IOAuth2User;
import lombok.Data;

@Data
public class ValidPageApiRequest<T extends ISortBy> {

    protected IOAuth2User user;
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

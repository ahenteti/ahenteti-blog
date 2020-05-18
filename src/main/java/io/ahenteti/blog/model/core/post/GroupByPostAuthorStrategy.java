package io.ahenteti.blog.model.core.post;

import io.ahenteti.blog.model.core.IGroupByStrategy;
import lombok.Data;

import java.util.SortedSet;

@Data
public class GroupByPostAuthorStrategy implements IGroupByStrategy {

    private final SortedSet<String> values;

    @Override
    public String getName() {
        return "author";
    }

    @Override
    public SortedSet<String> getValues() {
        return values;
    }
}

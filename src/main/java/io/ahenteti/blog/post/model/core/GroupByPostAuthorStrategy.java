package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
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

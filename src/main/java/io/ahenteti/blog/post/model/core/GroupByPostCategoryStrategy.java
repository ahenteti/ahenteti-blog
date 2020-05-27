package io.ahenteti.blog.post.model.core;

import io.ahenteti.blog.shared.model.core.IGroupByStrategy;
import lombok.Data;

import java.util.SortedSet;

@Data
public class GroupByPostCategoryStrategy implements IGroupByStrategy {

    private final SortedSet<String> values;

    @Override
    public String getName() {
        return "category";
    }

    @Override
    public SortedSet<String> getValues() {
        return values;
    }
}

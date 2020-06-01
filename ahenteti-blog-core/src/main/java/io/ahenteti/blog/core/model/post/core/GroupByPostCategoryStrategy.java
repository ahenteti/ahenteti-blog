package io.ahenteti.blog.core.model.post.core;

import io.ahenteti.blog.core.model.shared.core.IGroupByStrategy;
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

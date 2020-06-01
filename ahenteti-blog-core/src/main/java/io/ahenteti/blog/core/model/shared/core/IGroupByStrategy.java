package io.ahenteti.blog.core.model.shared.core;

import java.util.SortedSet;

public interface IGroupByStrategy {

    String getName();

    SortedSet<String> getValues();

}

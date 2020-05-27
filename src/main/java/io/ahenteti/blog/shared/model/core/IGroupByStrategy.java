package io.ahenteti.blog.shared.model.core;

import java.util.SortedSet;

public interface IGroupByStrategy {

    String getName();

    SortedSet<String> getValues();

}

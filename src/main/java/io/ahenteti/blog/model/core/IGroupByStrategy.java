package io.ahenteti.blog.model.core;

import java.util.SortedSet;

public interface IGroupByStrategy {

    String getName();

    SortedSet<String> getValues();

}

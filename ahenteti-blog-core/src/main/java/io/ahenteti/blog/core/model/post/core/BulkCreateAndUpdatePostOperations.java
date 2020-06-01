package io.ahenteti.blog.core.model.post.core;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BulkCreateAndUpdatePostOperations {
    private List<PostToCreate> postsToCreate = new ArrayList<>();
    private List<PostToUpdate> postsToUpdate = new ArrayList<>();
}

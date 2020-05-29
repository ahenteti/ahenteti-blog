package io.ahenteti.blog.post.model.core;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ValidBulkCreateAndUpdatePostOperations {
    private List<ValidPostToCreate> postsToCreate = new ArrayList<>();
    private List<ValidPostToUpdate> postsToUpdate = new ArrayList<>();
}

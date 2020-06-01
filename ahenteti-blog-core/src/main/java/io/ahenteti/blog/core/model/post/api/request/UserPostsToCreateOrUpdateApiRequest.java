package io.ahenteti.blog.core.model.post.api.request;

import lombok.Data;

import java.util.ArrayList;

@Data
public class UserPostsToCreateOrUpdateApiRequest extends ArrayList<UserPostToCreateOrUpdateApiRequest> {
}

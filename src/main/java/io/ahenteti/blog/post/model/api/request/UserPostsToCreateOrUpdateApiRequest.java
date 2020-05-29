package io.ahenteti.blog.post.model.api.request;

import lombok.Data;

import java.util.ArrayList;

@Data
public class UserPostsToCreateOrUpdateApiRequest extends ArrayList<UserPostToCreateOrUpdateApiRequest> {
}

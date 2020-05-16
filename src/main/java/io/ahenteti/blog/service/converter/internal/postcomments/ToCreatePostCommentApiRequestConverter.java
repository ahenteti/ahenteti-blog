package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.api.postcomments.CreatePostCommentApiRequest;
import io.ahenteti.blog.model.api.postcomments.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.model.core.user.IUser;
import org.springframework.stereotype.Service;

@Service
public class ToCreatePostCommentApiRequestConverter {

    public CreatePostCommentApiRequest toCreatePostCommentApiRequest(IUser author, Long postId, CreatePostCommentApiRequestBody body) {
        CreatePostCommentApiRequest res = new CreatePostCommentApiRequest();
        res.setAuthor(author);
        res.setPostId(postId);
        res.setValue(body.getValue());
        return res;
    }

}
package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequest;
import io.ahenteti.blog.postcomments.model.api.CreatePostCommentApiRequestBody;
import io.ahenteti.blog.user.model.oauth2.IOAuth2User;
import org.springframework.stereotype.Service;

@Service
public class ToCreatePostCommentApiRequestConverter {

    public CreatePostCommentApiRequest toCreatePostCommentApiRequest(IOAuth2User author, Long postId, CreatePostCommentApiRequestBody body) {
        CreatePostCommentApiRequest res = new CreatePostCommentApiRequest();
        res.setAuthor(author);
        res.setPostId(postId);
        res.setValue(body.getValue());
        return res;
    }

}

package io.ahenteti.blog.postcomments.service.utils;

import io.ahenteti.blog.postcomments.model.api.GetPostCommentsApiRequest;
import org.springframework.stereotype.Service;

@Service
public class ToGetPostCommentsApiRequestConverter {

    public GetPostCommentsApiRequest toGetPostCommentsApiRequest(Long postId, Integer page, Integer size) {
        GetPostCommentsApiRequest res = new GetPostCommentsApiRequest();
        res.setPostId(postId);
        res.setPage(page);
        res.setSize(size);
        return res;
    }

}

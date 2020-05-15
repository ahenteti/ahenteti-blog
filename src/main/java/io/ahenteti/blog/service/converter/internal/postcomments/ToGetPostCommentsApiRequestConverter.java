package io.ahenteti.blog.service.converter.internal.postcomments;

import io.ahenteti.blog.model.api.GetPostCommentsApiRequest;
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

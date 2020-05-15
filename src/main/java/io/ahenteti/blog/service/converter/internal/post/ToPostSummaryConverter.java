package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.core.post.PostSummary;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostSummaryConverter {

    private UserConverter userConverter;
    private CommonPostConverter commonPostConverter;

    @Autowired
    public ToPostSummaryConverter(UserConverter userConverter, CommonPostConverter commonPostConverter) {
        this.userConverter = userConverter;
        this.commonPostConverter = commonPostConverter;
    }

    public PostSummary toPostSummary(PostEntity entity) {
        PostSummary res = new PostSummary();
        res.setId(entity.getId());
        res.setTitle(entity.getTitle());
        res.setCategory(entity.getCategory());
        res.setTags(commonPostConverter.toTagsArrayList(entity));
        res.setCreatedAt(entity.getCreatedAt());
        res.setLastUpdatedAt(commonPostConverter.getLastUpdatedAt(entity));
        res.setAuthor(userConverter.toUser(entity.getAuthor()));
        return res;
    }

}

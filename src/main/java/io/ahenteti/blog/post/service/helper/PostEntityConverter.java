package io.ahenteti.blog.post.service.helper;

import io.ahenteti.blog.post.model.core.ValidPostToCreate;
import io.ahenteti.blog.post.model.core.ValidPostToUpdate;
import io.ahenteti.blog.post.model.entity.PostBodyEntity;
import io.ahenteti.blog.post.model.entity.PostEntity;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
public class PostEntityConverter {

    public PostEntity toEntity(ValidPostToCreate post) {
        PostEntity res = new PostEntity();
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(StringUtils.join(post.getTags(), PostEntity.TAGS_SEPARATOR));
        res.setAuthor(post.getAuthor());
        res.setCreatedAt(post.getCreatedAt());
        PostBodyEntity bodyEntity = new PostBodyEntity();
        bodyEntity.setValue(post.getBody());
        res.setBody(bodyEntity);
        return res;
    }

    public PostEntity toEntity(ValidPostToUpdate post) {
        PostEntity res = new PostEntity();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(StringUtils.join(post.getTags(), PostEntity.TAGS_SEPARATOR));
        res.setAuthor(post.getAuthor());
        res.setCreatedAt(post.getEntity().getCreatedAt());
        res.setLastUpdatedAt(post.getLastUpdatedAt());
        PostBodyEntity bodyEntity = new PostBodyEntity();
        bodyEntity.setId(post.getEntity().getBody().getId());
        bodyEntity.setValue(post.getBody());
        res.setBody(bodyEntity);
        return res;
    }
}

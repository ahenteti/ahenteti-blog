package io.ahenteti.blog.service.converter.internal.post;

import io.ahenteti.blog.model.core.post.Post;
import io.ahenteti.blog.model.entity.PostBodyEntity;
import io.ahenteti.blog.model.entity.PostEntity;
import io.ahenteti.blog.service.dao.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToPostEntityConverter {

    private final UserRepository userRepository;

    @Autowired
    public ToPostEntityConverter(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public PostEntity toPostEntity(Post post) {
        PostEntity res = new PostEntity();
        res.setId(post.getId());
        res.setTitle(post.getTitle());
        res.setCategory(post.getCategory());
        res.setTags(StringUtils.join(post.getTags(), PostEntity.TAGS_SEPARATOR_REGEX));
        res.setAuthor(userRepository.getOne(post.getAuthor().getId()));
        res.setCreatedAt(post.getCreatedAt());
        res.setLastUpdatedAt(post.getLastUpdatedAt().orElse(null));
        PostBodyEntity bodyEntity = new PostBodyEntity();
        bodyEntity.setValue(post.getBody());
        res.setBody(bodyEntity);
        return res;
    }

}

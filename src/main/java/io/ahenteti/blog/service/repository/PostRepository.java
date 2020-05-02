package io.ahenteti.blog.service.repository;

import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<PostEntity, Long> {
    
}

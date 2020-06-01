package io.ahenteti.blog.service.post;

import io.ahenteti.blog.core.model.post.entity.PostBodyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostBodyRepository extends JpaRepository<PostBodyEntity, Long> {

}

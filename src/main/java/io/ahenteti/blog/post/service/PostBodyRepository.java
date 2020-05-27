package io.ahenteti.blog.post.service;

import io.ahenteti.blog.post.model.entity.PostBodyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostBodyRepository extends JpaRepository<PostBodyEntity, Long> {

}

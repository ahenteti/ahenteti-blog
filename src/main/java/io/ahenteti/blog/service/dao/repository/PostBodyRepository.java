package io.ahenteti.blog.service.dao.repository;

import io.ahenteti.blog.model.entity.PostBodyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostBodyRepository extends JpaRepository<PostBodyEntity, Long> {

}

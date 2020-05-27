package io.ahenteti.blog.postcomments.service;

import io.ahenteti.blog.postcomments.model.entity.PostCommentEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostCommentRepository extends JpaRepository<PostCommentEntity, Long> {
    Page<PostCommentEntity> findByPostId(Long postId, Pageable pageable);
}

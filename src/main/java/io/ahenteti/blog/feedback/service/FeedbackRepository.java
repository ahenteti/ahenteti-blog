package io.ahenteti.blog.feedback.service;

import io.ahenteti.blog.feedback.model.entity.FeedbackEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long> {

    @Query(value = "SELECT f.* FROM T_FEEDBACKS f WHERE f.VALUE LIKE :sqlFilter OR (f.CREATED_AT\\:\\:text) LIKE :sqlFilter", nativeQuery = true)
    Page<FeedbackEntity> find(String sqlFilter, Pageable pageable);

}

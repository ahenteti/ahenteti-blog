package io.ahenteti.blog.service.dao.repository;

import io.ahenteti.blog.model.entity.PostEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
    List<PostEntity> findByCategoryIn(List<String> categories);
    List<PostEntity> findByAuthorUsernameIn(List<String> authors);

    @Query(value = "SELECT DISTINCT p.CATEGORY FROM T_POSTS p", nativeQuery = true)
    List<String> getPostCategories();

    @Query(value = "SELECT DISTINCT u.USERNAME FROM T_POSTS p INNER JOIN T_USERS u ON p.AUTHOR_ID = u.ID", nativeQuery = true)
    List<String> getPostAuthors();

    // @formatter:off
    @Query(value = "SELECT p.* " +
                   "FROM T_POSTS p " +
                   "WHERE p.AUTHOR_ID = :authorId " +
                   "      AND (p.TITLE LIKE :sqlFilter OR p.CATEGORY LIKE :sqlFilter OR p.TAGS LIKE :sqlFilter OR p.CREATED_AT\\:\\:text LIKE :sqlFilter)", nativeQuery = true)
    Page<PostEntity> findByAuthorId(Long authorId, String sqlFilter, Pageable pageable);
    // @formatter:on
}

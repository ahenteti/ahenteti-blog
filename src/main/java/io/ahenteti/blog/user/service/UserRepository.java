package io.ahenteti.blog.user.service;

import io.ahenteti.blog.user.model.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query(value = "SELECT u.* FROM T_USERS u WHERE u.USERNAME = :username AND u.PROVIDER = :provider LIMIT 1", nativeQuery = true)
    Optional<UserEntity> findByUsernameAndProvider(String username, String provider);

    @Query(value = "SELECT u.* FROM T_USERS u WHERE u.USERNAME LIKE :sqlFilter OR u.PROVIDER LIKE :sqlFilter OR (u.JOIN_AT\\:\\:text) LIKE :sqlFilter", nativeQuery = true)
    Page<UserEntity> find(String sqlFilter, Pageable pageable);
    
}

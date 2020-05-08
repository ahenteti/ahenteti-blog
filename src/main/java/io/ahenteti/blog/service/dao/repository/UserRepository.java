package io.ahenteti.blog.service.dao.repository;

import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query(value = "SELECT u.* FROM T_USERS u WHERE u.USERNAME = :username LIMIT 1", nativeQuery = true)
    Optional<UserEntity> findByUsername(String username);

}

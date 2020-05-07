package io.ahenteti.blog.service.repository;

import io.ahenteti.blog.model.entity.UserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {

    @Query(value = "SELECT u.* FROM T_USERS u WHERE u.GITHUB_USERNAME = :username", nativeQuery = true)
    Optional<UserEntity> findByUsername(String username);

}

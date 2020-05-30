package io.ahenteti.blog.user.service;

import io.ahenteti.blog.user.model.entity.UserRoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {

    @Modifying
    @Query(value = "DELETE FROM T_USER_ROLE ur WHERE ur.USER_ID = :userId", nativeQuery = true)
    void deleteByUserId(Long userId);

}

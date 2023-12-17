package com.nastya.dblab.repository;

import com.nastya.dblab.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

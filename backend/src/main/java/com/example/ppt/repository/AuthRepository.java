package com.example.ppt.repository;


import com.example.ppt.modle.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthRepository  extends JpaRepository<User,Integer> {
    User findUserByUsername(String username);

    List<User> findAllById(Integer id);

    List<User> findAllByRole(String role);
}
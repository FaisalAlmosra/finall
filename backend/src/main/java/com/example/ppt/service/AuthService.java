package com.example.ppt.service;


import com.example.ppt.exception.ApiException;
import com.example.ppt.modle.League;
import com.example.ppt.modle.User;
import com.example.ppt.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AuthService {

    private final AuthRepository authRepository;

    public void register(User user) {
        String hashedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);
        authRepository.save(user);
    }

    public List<User> findAllById(Integer allId) {
        List<User> users = authRepository.findAllById(allId);
        if (users == null) {
            throw new ApiException("Wrong Id  !");
        }
        return users;


    }

    public List<User> findAllByRole(String role) {
        List<User> users = authRepository.findAllByRole(role);
        if (users == null) {
            throw new ApiException("Worng  Role  !");
        }
        return users;
    }
}
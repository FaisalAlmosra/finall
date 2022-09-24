package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.League;
import com.example.ppt.modle.User;
import com.example.ppt.repository.AuthRepository;
import com.example.ppt.repository.TeamRepository;
import com.example.ppt.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final TeamRepository teamRepository;
    private final AuthRepository authRepository;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid User user) {
        user.setRole("USER");
        authService.register(user);
        return ResponseEntity.status(201).body(new ApiResponse("New user added !", 201));
    }

    @GetMapping("/me")
    public ResponseEntity getUser(@AuthenticationPrincipal User user) {
        user.setPassword("");
        return ResponseEntity.status(200).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity login() {
        return ResponseEntity.status(200).body(new ApiResponse(" Welcome !", 200));
    }


    @GetMapping("/AllId")
    public ResponseEntity<List<User>> findAllById(@RequestParam Integer AllId) {
        List<User> users = authService.findAllById(AllId);
        return ResponseEntity.status(200).body(users);
    }

    @GetMapping("/role")
    public ResponseEntity<List<User>> findAllByRole(@RequestParam String role) {
        List<User> users = authService.findAllByRole(role);
        return ResponseEntity.status(200).body(users);
    }
}
package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.Challenge;
import com.example.ppt.modle.User;
import com.example.ppt.repository.ChallengeRepository;
import com.example.ppt.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Api/v1/chl")
public class ChallengeController {
    private final ChallengeService challengeService;
    private final ChallengeRepository challengeRepository;

    @GetMapping("/get")
    public ResponseEntity getChl() {
        return ResponseEntity.status(200).body(challengeRepository.findAll());
    }

    @PostMapping
    public ResponseEntity addChl(@RequestBody @Valid Challenge challenge, @AuthenticationPrincipal User user) {
        challengeService.addChl(challenge, user);
        return ResponseEntity.status(201).body(new ApiResponse("New Challenge added !", 201));
    }

}
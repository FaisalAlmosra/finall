package com.example.ppt.service;


import com.example.ppt.modle.Challenge;
import com.example.ppt.modle.User;
import com.example.ppt.repository.ChallengeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    public List<Challenge> getChl(User user) {
        return challengeRepository.findByUserName(user.getUsername());
    }

    public void addChl(Challenge challenge, User user) {
        challenge.setUserName(user.getUsername());
        challengeRepository.save(challenge);
    }
}

package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.Support;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.repository.SupportRepository;
import com.example.ppt.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/pro")
@RequiredArgsConstructor
public class SupportController {
    private final SupportService supportService;
    private final SupportRepository supportRepository;

    @GetMapping
    public ResponseEntity getPro() {
        return ResponseEntity.status(200).body(supportRepository.findAll());
    }

    @PostMapping
    public ResponseEntity addPro(@RequestBody @Valid Support support, @AuthenticationPrincipal User user) {
        supportService.addPro(support, user);
        return ResponseEntity.status(201).body(new ApiResponse("New Problem added !", 201));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity DeleteSupport(@PathVariable Integer id) {
        supportService.deleteSupport(id);
        return ResponseEntity.status(201).body(new ApiResponse(" Problem Deleted !", 201));
    }


    @GetMapping("/problemType")
    public ResponseEntity<List<Support>> findSupportByProblemType(@RequestParam String problemType) {
        List<Support> support = supportRepository.findSupportByProblemType(problemType);
        return ResponseEntity.status(200).body(support);
    }

    @GetMapping("/name")
    public ResponseEntity<Support> findSupportByPlayerName(@RequestParam String playerName) {
        Support support = supportRepository.findSupportByPlayerName(playerName);
        return ResponseEntity.status(200).body(support);
    }

    @GetMapping("/rate")
    public ResponseEntity<Support> findSupportByRate(@RequestParam String rate) {
        Support support = supportRepository.findSupportByRate(rate);
        return ResponseEntity.status(200).body(support);
    }
}
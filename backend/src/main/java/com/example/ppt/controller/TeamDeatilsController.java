package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.TeamDeatils;
import com.example.ppt.modle.User;
import com.example.ppt.service.TeamDeatilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/Api/v1/TeamDeatils")


public class TeamDeatilsController {

    private final TeamDeatilsService teamDeatilsService;


    @GetMapping
    public ResponseEntity<List<TeamDeatils>> getTeamDeatils() {
        return ResponseEntity.status(HttpStatus.OK).body(teamDeatilsService.GetTeamDeatils());
    }

    @PostMapping("/register")
    public ResponseEntity Register(@RequestBody @Valid TeamDeatils teamDeatils,@AuthenticationPrincipal User user) {
        teamDeatilsService.Register(teamDeatils, user);
        return ResponseEntity.status(200).body(new ApiResponse("New TeamDeatils added !", 200));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity UpdateTeamDeatils(@RequestBody @Valid TeamDeatils teamDeatils, @PathVariable Integer idTeam) {
        teamDeatilsService.UpdateTeamDeatils(teamDeatils, idTeam);
        return ResponseEntity.status(200).body(new ApiResponse(" TeamDeatils Updated !", 200));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteTeamDeatils(@PathVariable Integer id) {
        teamDeatilsService.deleteTeamDeatils(id);
        return ResponseEntity.status(200).body(new ApiResponse("user deleted , Good bye !", 200));
    }


    @GetMapping("/all-users")
    public ResponseEntity<List<TeamDeatils>> findAllByNameUser(@RequestParam String Allusers) {
        List<TeamDeatils> teamDeatils = teamDeatilsService.findAllByNameUser(Allusers);
        return ResponseEntity.status(200).body(teamDeatils);
    }
    @GetMapping("/teams-user")
    public ResponseEntity<List<TeamDeatils>> findTeamDeatilsByTeamName(@RequestParam String teamsl) {
        List<TeamDeatils> teamDeatils = teamDeatilsService.findTeamDeatilsByTeamName(teamsl);
        return ResponseEntity.status(200).body(teamDeatils);
    }


}
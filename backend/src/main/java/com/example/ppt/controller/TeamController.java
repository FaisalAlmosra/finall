package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.League;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.repository.AuthRepository;
import com.example.ppt.repository.TeamRepository;
import com.example.ppt.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/Api/v1/Team")
public class TeamController {

    private final TeamService teamService;
    private final TeamRepository teamRepository;
    private final AuthRepository authRepository;

    @GetMapping
    public ResponseEntity<List<Team>> getTeam() {

        return ResponseEntity.status(HttpStatus.OK).body(teamService.GetTeam());
    }

    @PostMapping("/Register")
    public ResponseEntity Register(@RequestBody @Valid Team team, @AuthenticationPrincipal  User user  ) {
        teamService.Register(team, user);
        return ResponseEntity.status(200).body(new ApiResponse("New Team added !", 200));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity UpdateGame(@RequestBody @Valid Team team, @PathVariable Integer idTeam) {
        teamService.UpdateTeam(team, idTeam);
        return ResponseEntity.status(200).body(new ApiResponse("Team Updated !", 200));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer id) {
        teamService.deleteTeam(id);
        return ResponseEntity.status(200).body(new ApiResponse("user deleted , Good bye !", 200));
    }


    @GetMapping("/TeamName")
    public ResponseEntity<Team> findTeamByNameTeam(@RequestParam String teamName) {
        Team team = teamService.findTeamByNameTeam(teamName);
        return ResponseEntity.status(200).body(team);
    }
}

package com.example.ppt.controller;


import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.League;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.service.LeagueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/Api/v1/league")
public class LeagueController {

    private final LeagueService leagueService;


    @GetMapping
    public ResponseEntity<List<League>> getLeague() {

        return ResponseEntity.status(HttpStatus.OK).body(leagueService.GetLeague());
    }

    @PostMapping("/add")
    public ResponseEntity Register(@RequestBody @Valid League league , User user) {
        leagueService.addLeague(league,user);
        return ResponseEntity.status(200).body(new ApiResponse("New League added !", 200));
    }


    @DeleteMapping("/del/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer id) {
        leagueService.deleteLeague(id);
        return ResponseEntity.status(200).body(new ApiResponse("Team deleted , Good bye !", 200));
    }

    @GetMapping("/leagueName")
    public ResponseEntity<League> findLeagueByName(@RequestParam String leagueName) {
        League league = leagueService.findLeagueByName(leagueName);
        return ResponseEntity.status(200).body(league);
    }

//    @GetMapping("/LeagueTeam")
//    public ResponseEntity<League> findLeagueByNameTeam(@RequestParam String leagueNameTeam) {
//        League league = leagueService.findLeagueByNameTeam(leagueNameTeam);
//        return ResponseEntity.status(200).body(league);
//    }

    @PutMapping("/{leagueId}")
    public ResponseEntity<ApiResponse> updateLeague(@PathVariable Integer id, @RequestBody @Valid League league) {
        leagueService.UpdateLeague(league, id);
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Contact updated", 200));
    }

    @GetMapping("/All")
    public ResponseEntity<List<League>> findAllById(@RequestParam String All) {
        List<League> league = leagueService.findAllByName(All);
        return ResponseEntity.status(200).body(league);
    }
}
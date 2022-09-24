package com.example.ppt.service;

import com.example.ppt.exception.ApiException;
import com.example.ppt.modle.League;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;

    public List<Team> GetTeam() {
        return teamRepository.findAll();
    }

    public void Register(Team team, User user ) {
        team.setIdUser(user.getId());
               teamRepository.save(team);
    }

    public void UpdateTeam(Team team, Integer id) {
        Team oldTeam = teamRepository.findTeamById(id);
        oldTeam.setName(team.getName());
        oldTeam.setIdUser(team.getIdUser());
        teamRepository.save(oldTeam);
    }

    public void deleteTeam(Integer id) {
        Team team = teamRepository.findTeamById(id);
        teamRepository.delete(team);
    }

    public Team findTeamByNameTeam(String nameTeam) {
        Team team = teamRepository.findTeamByName(nameTeam);
        if (team == null) {
            throw new ApiException("Worng Team Name !");
        }
        return team;
    }

}
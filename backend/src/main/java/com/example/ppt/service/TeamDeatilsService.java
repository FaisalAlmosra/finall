package com.example.ppt.service;


import com.example.ppt.exception.ApiException;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.TeamDeatils;
import com.example.ppt.modle.User;
import com.example.ppt.repository.TeamDeatilsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
@RequiredArgsConstructor
public class TeamDeatilsService {

    private final TeamDeatilsRepository teamDeatilsRepository;

    public List<TeamDeatils> GetTeamDeatils() {
        return teamDeatilsRepository.findAll();
    }

    public void Register(TeamDeatils teamDeatils, User user ) {
        teamDeatils.setNameUser(user.getUsername());
        teamDeatilsRepository.save(teamDeatils);
    }

    public void UpdateTeamDeatils(TeamDeatils team, Integer id) {
        TeamDeatils oldTeam = teamDeatilsRepository.findTeamDeatilsByTeamId(id);
        oldTeam.setNameUser(team.getNameUser());
        teamDeatilsRepository.save(oldTeam);
    }

    public void deleteTeamDeatils(Integer id) {
        TeamDeatils team = teamDeatilsRepository.findTeamDeatilsByTeamId(id);
        teamDeatilsRepository.delete(team);
    }

    public List<TeamDeatils> findAllByNameUser(String AllUsers) {
        List<TeamDeatils> teamDeatils = teamDeatilsRepository.findAllByNameUser(AllUsers);
        if (teamDeatils == null) {
            throw new ApiException("Worng All Users  !");
        }
        return teamDeatils;


    }

    public List<TeamDeatils> findTeamDeatilsByTeamName(String allTeam) {
        List<TeamDeatils> teamDeatils = teamDeatilsRepository.findTeamDeatilsByTeamName(allTeam);
        if (teamDeatils == null) {
            throw new ApiException("Worng All Users  !");
        }
        return teamDeatils;


    }
}
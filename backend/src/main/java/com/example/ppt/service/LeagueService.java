package com.example.ppt.service;

import com.example.ppt.exception.ApiException;
import com.example.ppt.modle.League;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.repository.LeagueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeagueService {

    private final LeagueRepository leagueRepository;


    public List<League> GetLeague() {
        return leagueRepository.findAll();
    }

    public void addLeague(League league, User user) {
        user.setId(user.getId());
        leagueRepository.save(league);
    }


    public void UpdateLeague(League league, Integer id) {
        League oldLeague = leagueRepository.findLeagueById(id);
        oldLeague.setName(league.getName());

        oldLeague.setDetails(league.getDetails());
        leagueRepository.save(oldLeague);
    }

    public void deleteLeague(Integer id) {
        League league = leagueRepository.findLeagueById(id);
        leagueRepository.delete(league);
    }

    public League findLeagueByName(String name) {
        League league = leagueRepository.findLeagueByName(name);
        if (league == null) {
            throw new ApiException("Wrong League Name !");
        }
        return league;
    }

//    public League findLeagueByNameTeam(String nameTeam) {
//        League league = leagueRepository.findLeagueByNameTeam(nameTeam);
//        if (league == null) {
//            throw new ApiException("Worng Name Team !");
//        }
//        return league;


//    }

    public List<League> findAllByName(String All) {
        List<League> league = leagueRepository.findAllByName(All);
        if (league == null) {
            throw new ApiException("Worng All  !");
        }
        return league;

    }
}
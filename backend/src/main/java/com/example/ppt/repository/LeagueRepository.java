package com.example.ppt.repository;

import com.example.ppt.modle.League;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeagueRepository extends JpaRepository<League, Integer> {

    League findLeagueById(Integer id);

//    League findLeagueByNameTeam(String NameTeam);

    League findLeagueByName(String name);

    List<League> findAllByName(String all);

}

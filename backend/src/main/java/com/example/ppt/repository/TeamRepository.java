package com.example.ppt.repository;

import com.example.ppt.modle.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

    Team findTeamById(Integer id);

    Team findTeamByName(String NameTeam);

}
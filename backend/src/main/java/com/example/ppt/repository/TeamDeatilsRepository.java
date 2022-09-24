package com.example.ppt.repository;

import com.example.ppt.modle.TeamDeatils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TeamDeatilsRepository extends JpaRepository<TeamDeatils, Integer> {

    TeamDeatils findTeamDeatilsByTeamId(Integer TeamId);

    List<TeamDeatils> findAllByNameUser(String AllNameUser);

    List<TeamDeatils> findTeamDeatilsByTeamName(String allTeam);


}
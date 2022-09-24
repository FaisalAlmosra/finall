package com.example.ppt.repository;


import com.example.ppt.modle.Support;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupportRepository extends JpaRepository<Support,Integer> {
    List<Support> findByUserId(Integer id);

    List<Support> findSupportByProblemType(String problemType);

    Support findSupportByPlayerName(String Name);

    Support findSupportByRate(String rate);
}
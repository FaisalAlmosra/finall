package com.example.ppt.repository;

import com.example.ppt.modle.News;
import com.example.ppt.modle.Support;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News,Integer> {
}

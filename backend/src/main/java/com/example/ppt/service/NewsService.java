package com.example.ppt.service;

import com.example.ppt.modle.News;
import com.example.ppt.modle.TeamDeatils;
import com.example.ppt.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;

    public List<News> getNews() {
        return newsRepository.findAll();
    }

    public void addNews(News news) {
        newsRepository.save(news);
    }
}
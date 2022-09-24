package com.example.ppt.controller;

import com.example.ppt.dto.ApiResponse;
import com.example.ppt.modle.News;
import com.example.ppt.modle.Support;
import com.example.ppt.modle.TeamDeatils;
import com.example.ppt.modle.User;
import com.example.ppt.repository.NewsRepository;
import com.example.ppt.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsService newsService;
    private final NewsRepository newsRepository;

    @GetMapping
    public ResponseEntity getNews() {
        return ResponseEntity.status(200).body(newsService.getNews());
    }

    @PostMapping("/add")
    public ResponseEntity addGames(@RequestBody @Valid News news) {
        newsService.addNews(news);
        return ResponseEntity.status(200).body(new ApiResponse("New News added !", 200));
    }

//
//    @DeleteMapping("/{id}")
//    public ResponseEntity DeleteSupport(@PathVariable Integer id) {
//        supportService.deleteSupport(id);
//        return ResponseEntity.status(201).body(new ApiResponse(" Problem Deleted !", 201));
//    }
}

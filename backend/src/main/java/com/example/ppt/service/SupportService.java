package com.example.ppt.service;


import com.example.ppt.exception.ApiException;
import com.example.ppt.modle.Support;
import com.example.ppt.modle.Team;
import com.example.ppt.modle.User;
import com.example.ppt.repository.SupportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupportService {
    private final SupportRepository supportRepository;
    public List<Support> getPro(User user) {
        return supportRepository.findByUserId(user.getId());
    }
    public void addPro(Support support, User user) {
        support.setUserId(user.getId());
        supportRepository.save(support);
    }


    public void deleteSupport(Integer id) {
        Support support = supportRepository.getById(id);
        supportRepository.delete(support);
    }

    public List<Support> findSupportByProblemType(String problemType) {
        List<Support> support = supportRepository.findSupportByProblemType(problemType);
        if (support == null) {
            throw new ApiException("Worng problem Type !");
        }
        return support;

    }

    public Support findSupportByPlayerName(String name) {
        Support support = supportRepository.findSupportByPlayerName(name);
        if (support == null) {
            throw new ApiException("Worng Player Name !");
        }
        return support;

    }

    public Support findSupportByRate(String rate) {
        Support support = supportRepository.findSupportByRate(rate);
        if (support == null) {
            throw new ApiException("Worng Rate !");
        }
        return support;
    }
}
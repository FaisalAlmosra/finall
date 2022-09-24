package com.example.ppt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ApiLogin {
    private String message;
    private Integer status;
    private Integer userId;
}
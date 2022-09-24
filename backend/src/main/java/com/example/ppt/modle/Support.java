package com.example.ppt.modle;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Support {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    @NotEmpty(message = "playerName: can't be Empty !")
    @Column(columnDefinition = "varchar(20) unique not null")
    private String playerName ;

    @Pattern(regexp = "(site|members|other)", message = "problemType must be in site or members or other")
    private String problemType;
    @Pattern(regexp = "(1|2|3|4|5)", message = "rate must be from 1 to 5")
    private String rate;

    private String problemDescription;

    private Integer userId;
}
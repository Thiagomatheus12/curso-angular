package com.thiago.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity

public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO) //Para gerar Id's sequenciais de forma automática.
  @JsonProperty("_id")
  private Long id;

  @Column(length = 200, nullable = false) //Essa coluna não vai aceitar valores nulos. 200 = ao número de carácteres máximo.
  private String name;

  @Column(length = 10, nullable = false) //Essa coluna não vai aceitar valores nulos. 10 = ao número de carácteres máximo.
  private String category;

}

package com.thiago.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.thiago.crudspring.model.Course;
import com.thiago.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;


@RestController //Componente usando para expor uma api ou endpoint.
@RequestMapping("/api/courses") //Definição da rota no localHost.
@AllArgsConstructor //Cria automaticamente o construtor.
public class CoursesController {
 
  private final CourseRepository courseRepository; //Váriavel que armazena o CourseRepository.

  
  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public @ResponseBody List<Course> list() {
    return courseRepository.findAll();
  }
}

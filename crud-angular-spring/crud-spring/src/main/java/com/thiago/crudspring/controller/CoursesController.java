package com.thiago.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
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


  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Course create(@RequestBody Course course) {
    // System.out.println(course.getName());
    return courseRepository.save(course);
    // return ResponseEntity.status(HttpStatus.CREATED)
    // .body(courseRepository.save(course));
  }
}

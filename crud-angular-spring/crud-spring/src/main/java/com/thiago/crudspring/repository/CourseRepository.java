package com.thiago.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thiago.crudspring.model.Course;

//Componente que passa para o spring uma conexão de acesso ao banco de dados.
@Repository 

public interface CourseRepository extends JpaRepository<Course, Long>{
  
}

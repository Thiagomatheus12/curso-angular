import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

/**
 * Variável que armazena os cursos disponíveis.
 */
  courses: Course[] = [];

  /**
   * Variável que armazena quais os cursos que serão mostrado no browser.
   */
  displayedColumns = ['name', 'category'];

  /**
   *Chamada do construtor.
   * @param coursesService Injeção de dependência do serviço coursesService.
   */
  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list()
  }

  ngOnInit(): void {

}

}

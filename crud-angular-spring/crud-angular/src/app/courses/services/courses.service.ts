import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

/**
 * Injeção de dependências das classes.
 */
@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  /**
   * Método que retorna a lista de cursos disponíveis.
   */
  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );

  }
  save(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}

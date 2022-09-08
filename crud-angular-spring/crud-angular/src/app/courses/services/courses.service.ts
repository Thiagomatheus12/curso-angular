import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

/**
 * Injeção de dependências das classes.
 */
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Método que retorna a lista de cursos disponíveis.
   */
  list(): Course[] {
    return [
        { _id: '1', name: 'Angular', category: 'front-end'}
    ]
  }
}

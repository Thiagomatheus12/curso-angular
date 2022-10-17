import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

/**
 * Variável que armazena os cursos disponíveis.
 */
  courses$: Observable<Course[]>;

  /**
   * Variável que armazena quais os cursos que serão mostrado no browser.
   */
  displayedColumns = ['name', 'category', 'actions'];

  /**
   *Chamada do construtor.
   * @param coursesService Injeção de dependência do serviço coursesService.
   */
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.courses$ = this.coursesService.list().
    pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    )

  }

  /**
   *Método que inicia o dialog.
   */
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route}); //para pegar a rota que eu já estou e adicionar o /new, ao invés de usar 'courses/new'.
  }

  ngOnInit(): void {

}

  }

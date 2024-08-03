import { Component } from '@angular/core';
import { GridComponent } from '../../+component/grid/grid.component';
import { Professor } from '../../+models/Professor';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.css'
})
export class ProfessorComponent {
  professor:Professor[]=[
    {id:201,fullname:'amir'},
    {id:202,fullname:'amir raza'},
    {id:203,fullname:'reza'},
    {id:204,fullname:'amir ali'},
    {id:205,fullname:'ali'}
  ]

}

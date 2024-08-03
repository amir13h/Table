import { Component } from '@angular/core';
import { GridComponent } from '../../+component/grid/grid.component';
import { Lesson } from '../../+models/Lesson';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
edit(da: any) {
console.log(da);
}
lesson:Lesson[]=[
  {id:401,title:'c#'},
  {id:402,title:'c'},
  {id:403,title:'c++'},
  {id:405,title:'c##'}
]
}

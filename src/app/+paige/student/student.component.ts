import { Component } from '@angular/core';
import { GridComponent } from '../../+component/grid/grid.component';
import { Student } from '../../+models/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
remove(da: any) {
  console.log('remove');
  console.log(da);
}
edit(da:any) {
  console.log('edit');
  console.log(da);
}
  student:Student[]=[
    {id:101,fullname:'maryam',gpa:19.2},
    {id:102,fullname:'zahra',gpa:13},
    {id:103,fullname:'amir',gpa:10.8},
    {id:104,fullname:'maryami',gpa:17.3},
    {id:105,fullname:'sara',gpa:15.5},
  ]

}

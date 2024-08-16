import { Component } from '@angular/core';
import { GridComponent } from '../../+component/grid/grid.component';
import { Student } from '../../+models/student';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    GridComponent,
    FormComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  event:boolean=false;
  on($event: any) {
    this.event=$event;
  }
remove(da: any) {
  console.log('remove');
  console.log(da);
}
edit(da:any) {
  console.log('edit');
  console.log(da);
}
  student:Student[]=[
    {id:101,fullname:'reza',average:19.2},
    {id:102,fullname:'zahra',average:13},
    {id:103,fullname:'amir',average:10.8},
    {id:104,fullname:'asghar',average:17.3},
    {id:105,fullname:'sara',average:15.5},
  ]

}

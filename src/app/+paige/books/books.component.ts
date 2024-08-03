import { Component } from '@angular/core';
import { GridComponent } from '../../+component/grid/grid.component';
import { Book } from '../../+models/Book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books:Book[]=[
    {id:301,name:'c#'},
    {id:302,name:'c++'},
    {id:303,name:'c'},
    {id:304,name:'payton'}
  ]

}

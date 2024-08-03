import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfessorComponent } from "./+paige/professor/professor.component";
import { StudentComponent } from "./+paige/student/student.component";
import { BooksComponent } from "./+paige/books/books.component";
import { LessonComponent } from "./+paige/lesson/lesson.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfessorComponent,
    StudentComponent,
    BooksComponent,
    LessonComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project4';
}

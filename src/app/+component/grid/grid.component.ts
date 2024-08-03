import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  remove(da: any) {
    this.onRemove.emit(da);
  }
  edit(da: any) {
    this.onEdit.emit(da);
  }
  @Input() data: any[] = []
  @Input() columns: string[] = []
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}

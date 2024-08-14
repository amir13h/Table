import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  one:boolean=false;
  click() {
    this.one=!this.one;
    this.onformabel.emit(this.one);
  }
  remove(da: any) {
    this.onRemove.emit(da);
  }
  edit(da: any) {
    this.onEdit.emit(da);
  }
  @Input() data: any[] = []
  @Input() columns: string[] = []
  @Input() name: string = '';
  @Input() editabel: boolean = true;
  @Input() removeabel: boolean = true;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onformabel= new EventEmitter();
}

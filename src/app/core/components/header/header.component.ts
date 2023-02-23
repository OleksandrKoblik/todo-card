import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() updateEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFilterTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSortTodoFromHeader: EventEmitter<string> = new EventEmitter<string>();

  public todoControl: FormControl = new FormControl('',[Validators.required]);

  public createTodo(): void {
    this.updateEvent.emit(this.todoControl.value);
    this.todoControl.reset('');
  }

  getAll() {
    this.onFilterTodo.emit('ALL');
  }

  statusActive() {
    this.onFilterTodo.emit('Activity');
  }

  getFinished() {
    this.onFilterTodo.emit('Finished');
  }

  public onSortTodo(type: string): void {
    this.onSortTodoFromHeader.emit(type);
  }
}



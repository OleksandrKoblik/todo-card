import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoCard} from "../../../interfaces/app.interface";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todoCard!: TodoCard;
  @Input() cardNumber:number = 0;

  @Output() changeTodoStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTodoEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() editTodoEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public editTodo(): void {
    this.editTodoEvent.emit();
  }

  public deleteTodo(): void {
    this.deleteTodoEvent.emit();
  }

  public todoStatusChange(): void {
    this.changeTodoStatus.emit();
  }

}

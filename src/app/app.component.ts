import {Component, OnInit} from '@angular/core';
import {TodoCard} from "./interfaces/app.interface";
import {TodoListService} from "./services/todo-list.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmModalComponent} from "./core/components/modals/confirm-modal/confirm-modal.component";
import {EditTodoComponent} from "./core/components/modals/edit-todo/edit-todo.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'ToDoList_app';
  public todoList: TodoCard[]=[];


  constructor(
    private todoListService: TodoListService,
    private dialog: MatDialog,
    ) {
  }

  public ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList;
  }

  public handleUpdate(name: string): void {
    this.todoListService.setNewTodo = name;
    this.todoList = this.todoListService.getTodoList;

  }

  public changeTodoStatus(todo: TodoCard) : void {
    this.todoListService.setNewTodoStatusById =todo.id;
    this.todoList = this.todoListService.getTodoList;
  }

  public deleteTodo(todo: TodoCard): void {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.height = '300px';

    const dialogRef = this.dialog.open(ConfirmModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result) {
        this.todoListService.deleteTodoById(todo.id);
        this.todoList = this.todoListService.getTodoList;
      }
    });
  }

  public editTodo(todo: TodoCard): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '300px';
    dialogConfig.height = '400px';
    dialogConfig.data = todo;

    const dialogRef = this.dialog.open(EditTodoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.todoListService.updateTodoById(todo.id, result);
        this.initTodoList();
      }
    })
  }

  private initTodoList(): void {
    this.todoList = this.todoListService.getTodoList;
  }

  public onFilterTodo(event: string): void {
    if (event === 'ALL') {
      this.todoList = this.todoListService.getTodoList;
    }
    if (event === 'Activity') {
      this.todoList = this.todoListService.getActivityTodo();
    }
    if (event === 'Finished') {
      this.todoList = this.todoListService.getFinishedTodo();
    }
  }

  public onSortByType(event: string): void {
    if (event === 'text') {
      this.todoList = this.todoListService.sortTodoByText();
    }
    if (event === 'date') {
      this.todoList = this.todoListService.sortTodoByDate();
    }
    if (event === 'on') {
      this.todoList = this.todoListService.sortTodoByActive();
    }
    if (event === 'off') {
      this.todoList = this.todoListService.sortTodoByFinished();
    }
  }
}


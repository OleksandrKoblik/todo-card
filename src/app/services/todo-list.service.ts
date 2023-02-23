import { Injectable } from "@angular/core";
import { TodoCard} from "../interfaces/app.interface";

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoCard[] =[
    {
      isFinished: false,
      id: 1,
      title: "Read",
      dateOfCreation:new Date(),
      deadLineDate: new Date(),
    },
    {
      isFinished: false,
      id: 2,
      title: "Bred",
      dateOfCreation:new Date(),
      deadLineDate: new Date(),
    },
    {
      isFinished: false,
      id: 3,
      title: "Cool",
      dateOfCreation:new Date(),
      deadLineDate: new Date(),
    }
  ];

  public get getTodoList (): TodoCard[] {
    return this.todoList;
  }

  public set setNewTodo(todoTitle: string) {
    const newTodo: TodoCard = {
      isFinished: false,
      title: todoTitle,
      dateOfCreation:new Date(),
      id:Math.ceil(Math.random() * 1000),
      deadLineDate: new Date(),
    };

    this.todoList = [...this.todoList, newTodo];
  }

  public set setNewTodoStatusById(id: number) {
    this.todoList = this.todoList.map((el: TodoCard) => {
      return {
        ...el,
        isFinished: el.id === id ? !el.isFinished : el.isFinished,
      };
    });
  }

  public deleteTodoById(id: number): void {
    this.todoList = this.todoList.filter((el: TodoCard) =>el.id !==id);

  }

  public updateTodoById(id: number, newDate: { title: string; deadLineDate: Date}): void {
    this.todoList = this.todoList.map((el:TodoCard) => ({
      ...el,
    title: el.id === id ? newDate.title : el.title,
    deadLineDate: el.id === id ? newDate.deadLineDate : el.deadLineDate,
    }));
  }

  public getActivityTodo(): any[] {
    return this.todoList.filter(el => !el.isFinished);
  }

  public getFinishedTodo(): any[] {
    return this.todoList.filter(el => el.isFinished);
  }

  public sortTodoByText(): any[] {
    return this.todoList.sort((a, b) => a.title > b.title ? 1 : -1);
  }

  public sortTodoByDate(): any[] {
    return this.todoList.sort((a, b) => a.dateOfCreation > b.dateOfCreation ? 1 : -1);
  }

  public sortTodoByActive(): any[] {
    return this.todoList.sort((a, b) => a.isFinished > b.isFinished ? 1 : -1);

  }

  public sortTodoByFinished(): any[] {
    return this.todoList.sort((a, b) => !a.isFinished > !b.isFinished ? 1 : -1);
  }
}

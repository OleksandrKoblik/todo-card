import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectModule} from "./core/components/select/select.module";
import {TodoCardModule} from "./core/components/todo-card/todo-card.module";
import {ConfirmModalModule} from "./core/components/modals/confirm-modal/confirm-modal.module";
import {ButtonModule} from "./core/components/button/button.module";
import {EditTodoModule} from "./core/components/modals/edit-todo/edit-todo.module";
import {HeaderModule} from "./core/components/header/header.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    SelectModule,
    TodoCardModule,
    ReactiveFormsModule,
    ConfirmModalModule,
    ButtonModule,
    EditTodoModule,
    HeaderModule
  ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }

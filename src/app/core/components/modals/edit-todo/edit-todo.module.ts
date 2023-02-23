import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {ButtonModule} from "../../button/button.module";
import {TextInputModule} from "../../text-input/text-input.module";
import {DatePickerModule} from "../../date-picker/date-picker.module";



@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    ButtonModule,
    TextInputModule,
    DatePickerModule,
  ],
  exports: [
    EditTodoComponent
  ]
})
export class EditTodoModule { }

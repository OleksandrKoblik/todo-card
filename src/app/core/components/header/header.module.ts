import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {TextInputModule} from "../text-input/text-input.module";
import {ButtonModule} from "../button/button.module";
import {SelectModule} from "../select/select.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TextInputModule,
    ButtonModule,
    SelectModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

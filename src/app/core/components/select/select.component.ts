import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public selectedValue!: string;
  @Output() sortTodo: EventEmitter<string> = new EventEmitter<string>();

  public sortTypes: {value: string, viewValue: string} [] = [
    {value: 'text', viewValue: 'Sort By Text'},
    {value: 'date', viewValue: 'Sort By Date'},
    {value: 'on', viewValue: 'Sort By Active'},
    {value: 'off', viewValue: 'Sort By Finish'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public sortBy(type: string) {
    console.log(type);
    this.sortTodo.emit(type);
  }
}

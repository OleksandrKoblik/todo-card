import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoCard} from "../../../../interfaces/app.interface";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public modalData!: TodoCard;



  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: TodoCard,
    private dialogRef: MatDialogRef<EditTodoComponent>,
    ) {

  }

  ngOnInit(): void {
    this.modalData = this.data;
    this.initFromGroup();
  }

  public saveChanges(): void {
    this.dialogRef.close(this.formGroup.value);
  }

  public close(): void {
    this.dialogRef.close();
  }

  private initFromGroup(): void {
    this.formGroup.setControl(
      'title',
      new FormControl(this.modalData.title,
        [Validators.required])
    );
    this.formGroup.setControl(
      'deadLineDate',
      new FormControl(this.modalData.deadLineDate || '', [Validators.required])
    );
  }

}

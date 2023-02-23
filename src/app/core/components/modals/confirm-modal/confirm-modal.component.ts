import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmModalComponent>) {
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public accept(): void {
    this.dialogRef.close(true);
  }
}

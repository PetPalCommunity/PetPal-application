import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reminder-dialog',
  templateUrl: './add-reminder-dialog.component.html',
  styleUrls: ['./add-reminder-dialog.component.css']
})
export class AddReminderDialogComponent {
  reminderForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddReminderDialogComponent>,
    private fb: FormBuilder
  ) {
    this.reminderForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      time: ['', Validators.required],
      days: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.reminderForm.valid) {
      this.dialogRef.close(this.reminderForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

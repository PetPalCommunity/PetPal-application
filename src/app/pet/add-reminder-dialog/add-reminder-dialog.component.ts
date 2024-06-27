import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReminderRequestDTO } from '../interface/pet.interface';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-add-reminder-dialog',
  templateUrl: './add-reminder-dialog.component.html',
  styleUrls: ['./add-reminder-dialog.component.css']
})
export class AddReminderDialogComponent implements OnInit{
  reminderForm: FormGroup;
  daysOfWeek: string[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  constructor(
    public dialogRef: MatDialogRef<AddReminderDialogComponent>,
    private fb: FormBuilder,
    private petService: PetService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reminderForm = this.fb.group({
      petName:[this.data.petName, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      time: ['', Validators.required],
      days: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  addReminder(): void {
    if (this.reminderForm.invalid) {
      return;
    }
    const reminder: ReminderRequestDTO = {
      petName: this.reminderForm.value.petName,
      name: this.reminderForm.value.name,
      description: this.reminderForm.value.description,
      time: this.reminderForm.value.time,
      days: this.reminderForm.value.days
    }
    this.petService.createReminder(reminder).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (err) => {
        console.error('Error al crear recordatorio:', err.message);
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

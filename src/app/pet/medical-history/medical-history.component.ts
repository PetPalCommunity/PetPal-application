import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReminderResponseDTO } from '../interface/pet.interface';
import { AddReminderDialogComponent } from '../add-reminder-dialog/add-reminder-dialog.component';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  pet = {
    name: 'Floki',
    species: 'Dog',
    breed: 'Siberian Husky',
    age: 3,
    sex: 'Male',
    image: 'https://s3-alpha-sig.figma.com/img/731b/492e/ef9902a973d62241d0021fbef3c6d973?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSn1mVke0-nZgoLVMXcen2ubij9tcG1nCVO~OS0~7z3k7PCuK4VmXBDqim7IP71rXv5ri1j27BprDXj1MbUHoRisAc6fII-5MmvwYaDja0T851h5g0BxIZXj4ft1d8gMZp-W8LD5FNPNfi3ZEyefkz1j6QMkEfDMIKq1rg-ecppta~0mABxlsv4NGxHgj8tBSjx1phobY0Ejzrf0g4Idj6g5dIsnli5hPAdqHMZYP0UEQQ5YxKePzAz43VKSuUK54JadqOB0Zlp-BbavrBjGN55sSt9HyPRexqAgwmuRfLUj-0xTB8H5biM8YP3qiEyYx4ykDW3oiKC53IDhxEOjVg__'
  };

  reminders: ReminderResponseDTO[] = [
    {
      id: 1,
      name: 'Programmed Walks',
      description: '08:00 - 09:00\n19:00 - 20:30',
      nextDate: '',
      time: '',
      days: ''
    },
    {
      id: 2,
      name: 'Next Vaccine/Medicine',
      description: 'Year Vaccine: 03/10/24\nDe-worming: 10/05/24',
      nextDate: '',
      time: '',
      days: ''
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addReminder(): void {
    const dialogRef = this.dialog.open(AddReminderDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newReminder: ReminderResponseDTO = {
          id: this.reminders.length + 1,
          name: result.name,
          description: result.description,
          nextDate: 'Fixed Next Date', // Add your logic for fixed next date
          time: result.time,
          days: result.days
        };
        this.reminders.push(newReminder);
      }
    });
  }
}

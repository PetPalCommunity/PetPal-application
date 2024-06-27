import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Appointment } from '../models/appointment';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  currentDay: string = '2024-06-22'; // Example starting date
  profileImageUrl: string = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alessandra'; // Profile picture URL
  name: string = 'Alessandra'; // Vet's name
  title: string = 'Veterinarian Dogs & Cats'; // Vet's title
  rating: number = 4; // Vet's rating out of 5
  
  appointments: Appointment[] = [
    // Example appointments
    {
      petName: 'Buddy',
      petBreed: 'Golden Retriever',
      motive: 'Checkup',
      date: '2024-06-22',
      timeStart: '08:00',
      timeEnd: '09:00',
      confirmed: true
    },
    {
      petName: 'Whiskers',
      petBreed: 'Siamese Cat',
      motive: 'Vaccination',
      date: '2024-06-22',
      timeStart: '10:00',
      timeEnd: '11:30',
      confirmed: false
    },
    {
      petName: 'Whiskers',
      petBreed: 'Siamese Cat',
      motive: 'Vaccination',
      date: '2024-06-23',
      timeStart: '10:00',
      timeEnd: '11:30',
      confirmed: false
    }
    // Add more appointments as needed
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  getAppointmentsForDay(date: string): Appointment[] {
    return this.appointments.filter(appointment => appointment.date === date);
  }

  openAppointmentDialog(appointment: Appointment): void {
    this.dialog.open(AppointmentDialogComponent, {
      data: appointment
    });
  }

  changeDay(offset: number): void {
    const currentDate = new Date(this.currentDay);
    currentDate.setDate(currentDate.getDate() + offset);
    this.currentDay = currentDate.toISOString().split('T')[0];
  }
  generateTimes(): string[] {
    const times = [];
    for (let i = 7; i <= 23; i++) {
      times.push(`${i < 10 ? '0' : ''}${i}:00`);
    }
    return times;
  }
  
  getAppointmentStyle(appointment: Appointment): any {
    const timeStart = parseInt(appointment.timeStart.replace(':', ''), 10);
    const timeEnd = parseInt(appointment.timeEnd.replace(':', ''), 10);
    const top = (timeStart - 700) / 100 * 40; // Adjust 700 if your start time is different
    const height = (timeEnd - timeStart) / 100 * 40; // Adjust 40 if your time block height is different
    return {
      top: `${top}px`,
      height: `${height}px`,
      backgroundColor: appointment.confirmed ? 'lightgreen' : 'yellow'
    };
  }
  
}

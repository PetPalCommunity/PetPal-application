export interface Appointment {
    petName: string;
    petBreed: string;
    motive: string;
    date: string; // Date in 'YYYY-MM-DD' format
    timeStart: string; // Time in 'HH:mm' format
    timeEnd: string; // Time in 'HH:mm' format
    confirmed: boolean;
  }
  
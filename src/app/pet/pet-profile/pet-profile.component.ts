import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { PetResponseDTO } from '../interface/pet.interface';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
  pet: PetResponseDTO = {
    name: 'Floki',
    species: 'Dog',
    breed: 'Samoyed',
    age: 3,
    sex: 'Male',
    image: 'https://s3-alpha-sig.figma.com/img/731b/492e/ef9902a973d62241d0021fbef3c6d973?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSn1mVke0-nZgoLVMXcen2ubij9tcG1nCVO~OS0~7z3k7PCuK4VmXBDqim7IP71rXv5ri1j27BprDXj1MbUHoRisAc6fII-5MmvwYaDja0T851h5g0BxIZXj4ft1d8gMZp-W8LD5FNPNfi3ZEyefkz1j6QMkEfDMIKq1rg-ecppta~0mABxlsv4NGxHgj8tBSjx1phobY0Ejzrf0g4Idj6g5dIsnli5hPAdqHMZYP0UEQQ5YxKePzAz43VKSuUK54JadqOB0Zlp-BbavrBjGN55sSt9HyPRexqAgwmuRfLUj-0xTB8H5biM8YP3qiEyYx4ykDW3oiKC53IDhxEOjVg__' // Replace with the actual image URL
  };

  constructor(private router: Router) {} // Inject Router

  ngOnInit(): void {}

  editProfile(): void {
    this.router.navigate(['/pet/update-profile']); // Navigate to the Update Profile page
  }
}

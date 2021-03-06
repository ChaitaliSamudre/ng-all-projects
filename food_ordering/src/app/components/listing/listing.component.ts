import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  Box1 = [
    {
      Name: 'Pizza',
      Price: 300,
      imagelink: '../../assets/image/img2.jpg'
    },
    {
      Name: 'Burger',
      Price: 200,
      imagelink: '../../assets/image/doctors.jpg'

    }
  ];

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.dialogRef.closeAll();
  }

}

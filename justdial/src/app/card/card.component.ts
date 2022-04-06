import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Box1 = [
    {
      title: 'RESTAURANTS',
      text1: 'Order Online',
      text2: 'Book Table',
      text3: 'Trending',
      text4: 'More ...',
      imagelink:"../../assets/image/img2.jpg"
    },
    {
      title: 'SHOP ONLINE',
      text1: 'Mobile',
      text2: 'Televisions',
      text3: 'Air Conditioners',
      text4: 'More ...',
      imagelink: '../../assets/image/mobile.png'

    }
  ];

  Box2 = [
    {
      title: 'DAILY NEEDS',
      text1: 'Grocery  ',
      text2: 'Chemists',
      text3: 'Bakery',
      text4: 'More ...',
      imagelink: '../../assets/image/img2.jpg'
    },
    {
      title: 'DOCTORS',
      text1: 'Dentists',
      text2: 'Dermatologists',
      text3: 'ENT',
      text4: 'More ...',
      imagelink: '../../assets/image/doctors.jpg'
    }
  ];

  Box3 = [
    {
      title: 'TRAVEL',
      text1: 'Flights',
      text2: 'Bus',
      text3: 'Hotels',
      text4: 'Car Rentals',
      imagelink: '../../assets/image/img2.jpg'
    },
    {
      title: 'REPAIRS',
      text1: 'Laptops',
      text2: 'Mobile Phones',
      text3: 'Washing Machine',
      text4: 'More ...',
      imagelink: '../../assets/image/doctors.jpg'

    }
  ];

  Box4 = [
    {
      title: 'LOANS',
      text1: 'Personel Loans  ',
      text2: 'Car Loans',
      text3: 'Home Loans',
      text4: 'Credit Cards',
      imagelink: '../../assets/image/mobile.png'
    },
    {
      title: 'AUTO MOBILES',
      text1: 'New Cars',
      text2: 'Used Cars',
      text3: 'Car Insurance',
      text4: 'Driving Insurance ',
      imagelink: '../../assets/image/img2.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

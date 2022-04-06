import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  person = [
    {
      "name": "Chaitali",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Priya",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Vandana",
      "age": 21,
      "country": 'IND'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },

  ];

  getColors(code: string) {
    switch (code) {
      case 'IND':
        return 'brown';
        break;

      case 'USA':
        return 'blue';
        break;
      default:
        return 'yellow';
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

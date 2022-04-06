import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  nameone = 'THBS';
  Location = 'BANG';
  Details = 'Integration Company'

  constructor() { }

  ngOnInit(): void {

  }

}

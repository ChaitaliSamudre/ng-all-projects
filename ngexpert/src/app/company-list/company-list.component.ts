import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() companyName : any;
  @Input() companyLocation : any;
  @Input() companyDetails : any;

  constructor() { }

  ngOnInit(): void {
    alert(this.companyName);
    alert(this.companyLocation);
    alert(this.companyDetails);
  }

}

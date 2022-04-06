import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  Welmsg = 'Welcome to angular';
  myData = 'Chaitali';
  ageData = '2020';

  constructor() { }

  ngOnInit(): void {
  }

}

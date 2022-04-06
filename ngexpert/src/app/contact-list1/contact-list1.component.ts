import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list1',
  templateUrl: './contact-list1.component.html',
  styleUrls: ['./contact-list1.component.css']
})
export class ContactList1Component implements OnInit {
  ChildData:any;
  constructor() { }
  ngOnInit(): void {
  }
  receivedChildData(myval:String)
  {

    this.ChildData=myval;

  }

}
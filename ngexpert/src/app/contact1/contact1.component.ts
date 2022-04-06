import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements OnInit {
  @Output() sendMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.sendMessage.emit({courseName : 'MEAN' ,
    startedDate : '12/12/2021'});

  }
}

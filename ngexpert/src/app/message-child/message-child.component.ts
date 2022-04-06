import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.css']
})
export class MessageChildComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.sendMessage.emit({
      cmpname : 'THBS',
      cmpLoc : 'BANG'
    });
  }

}

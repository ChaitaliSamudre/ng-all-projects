import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  userList: any;
  myform : FormGroup = new FormGroup(
    {
    ticket: new FormControl('',Validators.required),
    des: new FormControl('', ),
    dropdown : new FormControl('', )
  }
  );
  constructor(private myUserSrv:UserService) { }
  ngOnInit(): void {
    this.myUserSrv.getProfiles().subscribe((result:any) => {
      this.userList=result;
    }); 
  }
 
  getValues() {
    console.log(this.myform);
}
}

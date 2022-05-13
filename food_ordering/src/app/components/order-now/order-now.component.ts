import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
  orderamt:number=0;
  myform2: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });

  constructor(private myactivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.myactivatedRoute.queryParams.subscribe((param) => {
      console.log(param['amount'])
      this.orderamt = param['amount']
    });
  }
  getValues() {
    console.log(this.myform2);
  }


}

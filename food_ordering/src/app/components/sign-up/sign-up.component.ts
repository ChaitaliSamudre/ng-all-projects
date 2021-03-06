import { HttpClient } from '@angular/common/http';
import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isUserAdded=false;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  myform1: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.emailRegEx)]),
      city: new FormControl('', Validators.required),
      state : new FormControl(''),
      address: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)


    });
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
  }
  getValues(myform1: any) {
    console.log(this.myform1);
    let data = {
      Name: myform1.value.name,
      phone: myform1.value.phone,
      email: myform1.value.email,
      Address: myform1.value.address,
      city: myform1.value.city,
      state: myform1.value.state,
      zip: myform1.value.zip
    };
    console.log(myform1)
    this.myhttp.post('/api/users/sign-up', data)
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        myform1.form.reset();

      });
  }
}





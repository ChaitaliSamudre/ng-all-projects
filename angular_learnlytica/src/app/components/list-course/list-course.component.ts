import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  myCourse : any;
  constructor() { }

  ngOnInit(): void {
    // this.mConfig.getCourseList().subscribe((sdata) => {
    //   // console.log()
    //   this.myCourse=sdata   
    // });
  }

}

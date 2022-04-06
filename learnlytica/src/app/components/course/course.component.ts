import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseTitle = 'Git for beginner';
  currentDate = new Date();

  courseDetails = {
    title:'ss',
    price: 100
  }
  constructor() { }

  ngOnInit(): void {
  }

}

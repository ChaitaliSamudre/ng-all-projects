import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() configs: any;
  @Input() imgid: any;
  imgUrl: any;
  
  courseTitle = 'Git for beginner';
  currentDate = new Date();

  courseDetails = {
    title:'ss',
    price: 100
  }
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
  }

}

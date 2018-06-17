import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:SectionServiceClient,
              private router:Router) {
    this.route.params.subscribe(params=>this.loadSection(params))
  }

  courseId;
  sectionName;
  seats;
  sections=[];

  loadSection(params){
    var courseId=params['courseId'];
    this.courseId=courseId
    this.service.loadSectionForCourse(courseId)
      .then(sections=>this.sections=sections)
    //console.log(this.sections)
  }

  createSection(sectionName,seats){
    this.service.createSection(this.courseId,sectionName,seats)
      .then(()=>this.service.loadSectionForCourse(this.courseId)
        .then(sections=>this.sections=sections))
  }

  enroll(section){
    this.service.enrollStudent(section)
      .then(()=>(
        this.router.navigate(['profile'])
      ))
  }

  ngOnInit() {
  }

}

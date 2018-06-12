import { Component, OnInit } from "@angular/core";
import {CourseNavigationServiceClient} from "../services/course-navigation.service.client";

@Component({
  selector: "app-course-navigator",
  templateUrl: "./course-navigator.component.html",
  styleUrls: ["./course-navigator.component.css"]
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigationServiceClient) { }

  courses = [];
  modules = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => (
        this.courses = courses
      ));
  }

  selectCourse(courseId) {
    this.service.findModuleForCourse(courseId)
      .then(modules => (
        this.modules = modules
      ));
  }

}

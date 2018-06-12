export class CourseNavigationServiceClient {

    findAllCourses() {
      return fetch("http://localhost:8080/api/course")
        .then(response => (
          response.json()
        ));
    }

    findModuleForCourse(courseId) {
      return fetch("http://localhost:8080/api/course/CID/module".replace("CID", courseId))
        .then(response => (
          response.json()
        ));
    }

}

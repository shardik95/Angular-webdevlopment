import {s} from '@angular/core/src/render3';

export class SectionServiceClient{

  SECTION_URL="http://localhost:4000/api/course/CID/section";

  createSection(courseId,SectionName,seats){

    var section={
      name:SectionName,
      seats:seats,
      courseId:courseId
    }

      return fetch(this.SECTION_URL.replace("CID",courseId),{
         method:'post',
        headers:{
           'content-type':'application/json'
        },
        body:JSON.stringify(section),
        credentials:'include'
      })
  }

  findAllSectionsForStudent(){
    return fetch("http://localhost:4000/api/student/section",{
      credentials:'include'
    })
      .then(response=>response.json());
  }

  loadSectionForCourse(courseId){
    return fetch(this.SECTION_URL.replace("CID",courseId))
      .then(sections=>sections.json())
  }

  enrollStudent(section){
    const url = "http://localhost:4000/api/section/"+section._id+"/enrollment";
    return fetch(url,{
      method:'post',
      credentials:'include'
    })
  }

}

export class ModuleServiceClient{

  MODULE_URL="http://localhost:8080/api/course/CID/module";

  findAllModules(courseId){
    return fetch(this.MODULE_URL.replace("CID",courseId))
      .then(response=>response.json())
  }

}

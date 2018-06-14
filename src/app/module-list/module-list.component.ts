import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ModuleServiceClient) {
    this.route.params.subscribe(params=>this.loadModules(params['courseId']))
  }

  modules=[]

  loadModules(courseId){
    this.service.findAllModules(courseId)
      .then(modules=>this.modules=modules)
  }

  ngOnInit() {
  }

}

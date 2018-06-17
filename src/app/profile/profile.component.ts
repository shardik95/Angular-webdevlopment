import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;
  password;
  sections=[];

  constructor(private service:UserServiceClient,private router:Router,private sectionService:SectionServiceClient) { }

  ngOnInit() {
    this.service.profile()
      .then(user=>this.username=user.username);

    this.sectionService.findAllSectionsForStudent()
      .then((sections)=>this.sections=sections)
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

}

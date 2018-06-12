import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {CourseNavigationServiceClient} from './services/course-navigation.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseNavigationServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

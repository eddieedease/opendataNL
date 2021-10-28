import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';

import {
  ServiceService
} from './service.service';

// import evironment for current dev bunlde
import {
  environment
} from '../environments/environment';

const appRoutes: Routes = [{
  path: '',
  component: LandingComponent
},
{
  path: 'contact',
  component: ContactComponent
}]
;

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        useHash: false,
        onSameUrlNavigation: 'reload'
      }, // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CivilianComponent } from './civilian.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  declarations: [
    AppComponent,
    CivilianComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

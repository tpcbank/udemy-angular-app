import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './Assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Assignment1/success-alert/success-alert.component';
import { SeverComponent } from './sever/sever.component';
import { SeversComponent } from './severs/severs.component';
import { FormAssignmentComponent } from './Assignment2/form-assignment/form-assignment.component';
import { Assingment3Component } from './assingment3/assingment3.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SeverComponent,
    SeversComponent,
    FormAssignmentComponent,
    Assingment3Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

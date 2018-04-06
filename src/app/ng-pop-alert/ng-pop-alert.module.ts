import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertEventService} from './alert.event.service';
import {HttpModule} from '@angular/http';
import {NgPopAlertService} from './ng-pop-alert.service';
import {NgPopAlertComponent} from './ng-pop-alert.component';
import {ValidationErrorService} from './validation-error.service';

@NgModule({
  imports: [
    HttpModule,
    CommonModule
  ],
  declarations: [NgPopAlertComponent],
  exports: [NgPopAlertComponent]
})
export class NgPopAlertModule {
  static forRoot() {
    return {
      ngModule: NgPopAlertModule,
      providers: [NgPopAlertService, AlertEventService, ValidationErrorService]
    };
  }
}

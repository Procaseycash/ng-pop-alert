import {Component, OnInit} from '@angular/core';
import {NG_POP_ALERT_CONF} from './ng-pop-alert/ng-pop-alert.conf';
import {NgPopAlertService} from './ng-pop-alert/ng-pop-alert.service';
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  styles = {
    border: '2px solid red'
  };

  constructor(private ngAlertService: NgPopAlertService) {
    NG_POP_ALERT_CONF.duration = 18000; // milliseconds
  }

  success() {
    const msg: SafeHtml = `<b>Hello world</b>`;
    this.ngAlertService.success(msg);
  }

  info() {
    this.ngAlertService.info('Hello world');
  }

  warning() {
    this.ngAlertService.warning('Hello world');
  }

  error() {
    this.ngAlertService.error('Hello world');
  }

  clear() {
    this.ngAlertService.clear();
  }

  errorWithData() {
    const response = {
      errors: ['Username not filled', 'Email field is empty'], // can be String | Array<Object> | Array<String> | Object
      status: 400,
      message: 'Unable to process information'
    };
    this.ngAlertService.error('Error encountered', response['errors']);
  }

  ngOnInit() {
  }
}


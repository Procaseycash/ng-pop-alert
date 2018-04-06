import { Injectable } from '@angular/core';
import {ValidationErrorService} from './validation-error.service';
import {AlertEventService} from './alert.event.service';
import {SafeHtml} from '@angular/platform-browser';
import {Alert} from './ng-pop-alert.interface';

@Injectable()
export class NgPopAlertService {
  public alert: Alert = {
    visible: false,
    message: '',
    type: '',
    alert_class: ''
  };
  constructor(private validationError: ValidationErrorService, private alertEventService: AlertEventService) { }

  /**
   * Success Alert
   * @param message
   * @returns {{message: string, alert_class: string}}
   */
  success(message: SafeHtml | string) {
    this.alert['alert_class'] = 'alert alert-success animated fadeIn';
    this.alert['message'] = message;
    this.alert['visible'] = true;
    this.alert['type'] = 'success';
    this.alertEventService.broadcast('AlertMessage', this.alert);
    return this.alert;
  }

  /**
   * Info Alert
   * @param message
   * @returns {{message: string, alert_class: string}}
   */
  info(message: SafeHtml | string) {
    this.alert['alert_class'] = 'alert alert-info animated fadeIn';
    this.alert['message'] = message;
    this.alert['visible'] = true;
    this.alert['type'] = 'info';
    this.alertEventService.broadcast('AlertMessage', this.alert);
    return this.alert;
  }

  /**
   * Warning Alert
   * @param message
   * @returns {{message: string, alert_class: string}}
   */
  warning(message: SafeHtml | string) {
    this.alert['alert_class'] = 'alert alert-warning animated fadeIn';
    this.alert['message'] = message;
    this.alert['visible'] = true;
    this.alert['type'] = 'warning';
    this.alertEventService.broadcast('AlertMessage', this.alert);
    return this.alert;
  }

  /**
   * Error Alert
   * @param defaultMessage
   * @param data
   * @returns {{message: string, alert_class: string}}
   */
  error(defaultMessage: SafeHtml | string, data?: String | Object | Array<SafeHtml | string> | Array<Object>) {
    this.alert['alert_class'] = 'alert alert-danger animated fadeIn';
    this.alert['message'] = defaultMessage;
    if (data) {
      this.alert['message'] = this.showError(data, defaultMessage);
    }
    this.alert['visible'] = true;
    this.alert['type'] = 'error';
    this.alertEventService.broadcast('AlertMessage', this.alert);
    return this.alert;
  }


  /**
   * This is used to clear alert from display
   */
  clear() {
    this.alertEventService.broadcast('closeAlertMessage', new Date());
  }

  /**
   * This is used to display Error message
   * @param data
   * @param message
   */
  private showError(data, message) {
    if (data.constructor === Object || data.constructor === Array) {
      return this.validationError.message(data, message);
    } else {
      data = (data.constructor === String) ? data : message;
      return data || message || data['statusText'] || 'Error encountered while processing request, please try again.';
    }
  }

}

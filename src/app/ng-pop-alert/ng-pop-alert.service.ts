import { Injectable } from '@angular/core';
import {ValidationErrorService} from './validation-error.service';
import {AlertEventService} from './alert.event.service';

@Injectable()
export class NgPopAlertService {
  public alert = {
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
  success(message: string) {
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
  info(message: string) {
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
  warning(message: string) {
    this.alert['alert_class'] = 'alert alert-warning animated fadeIn';
    this.alert['message'] = message;
    this.alert['visible'] = true;
    this.alert['type'] = 'warning';
    this.alertEventService.broadcast('AlertMessage', this.alert);
    return this.alert;
  }

  /**
   * Error Alert
   * @param message
   * @param data
   * @returns {{message: string, alert_class: string}}
   */
  error(message: string, data?: Object | Array<string> | Array<Object>) {
    this.alert['alert_class'] = 'alert alert-danger animated fadeIn';
    this.alert['message'] = message;
    if (data) {
      this.alert['message'] = this.showError(data, message);
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

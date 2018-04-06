import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {AlertEventService} from './alert.event.service';
import {NG_POP_ALERT_CONF} from './ng-pop-alert.conf';

@Component({
  selector: 'ng-pop-alert',
  templateUrl: './ng-pop-alert.component.html',
  styleUrls: ['./ng-pop-alert.component.css']
})
export class NgPopAlertComponent implements OnInit {
  @Input() overlay = true;
  @Input() styles = {};
  public alert = {
    visible: false,
    message: '',
    type: '',
    alert_class: ''
  };
  public alertClosure;
  public message: SafeHtml | string = ``;

  constructor(private sanitizer: DomSanitizer, private alertEventService: AlertEventService) {
  }


  private closeAlert() {
    this.alertClosure = setTimeout(() => {
      this.alert['visible'] = false;
    }, NG_POP_ALERT_CONF.duration);
  }

  ngOnInit() {
    this.alertEventService.on('AlertMessage', data => {
      clearTimeout(this.alertClosure);
      setTimeout(() => {
        this.alert = data;
        console.log('duration=', NG_POP_ALERT_CONF.duration);
        this.message = this.sanitizer.bypassSecurityTrustHtml(this.alert['message']);
        this.closeAlert();
      }, 200);
    });

    this.alertEventService.on('closeAlertMessage', () => {
      this.alert['visible'] = false;
      clearTimeout(this.alertClosure);
    });

  }

}

import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {NG_POP_ALERT_CONF} from "./ng-pop-alert/ng-pop-alert.conf";
import {NgPopAlertService} from "./ng-pop-alert/ng-pop-alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private ngAletService: NgPopAlertService) {
    NG_POP_ALERT_CONF.duration = 5000;
  }


  ngOnInit() {
    this.ngAletService.success('Hello world');
  }
}


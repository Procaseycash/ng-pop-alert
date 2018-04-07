# NgPopAlert (Angular ^4...)

This is an angular Notification or Alert . it help you to notify messages to users of your application in every state it is required.     

 ## Release Note
 Due to compatibility issues in Angular 4 & 5, we will maintain all:
 ````
 Angular 4 from 4.0.0 and above.
 Angular 5 from 5.0.0 and above.
 ````
 
 ## Installation
 
 `npm install --save ng-pop-alert`

   
## Usage in Application

Follow the instruction below to use ng-pop-alert.

`import {NgPopAlertModule} from 'ng-pop-alert';`

Add `NgPopAlertModule.forRoot()` in AppModule or Other Modules using `NgPopAlertModule`
     
   # Notice: 
  ```` 
  We have the following methods you can use to notify message and message passed can be a SafeHTML or string.
    
    success: for success alert. Accepts SafeHtml | string
    warning: for warning alert. Accepts SafeHtml | string
    info: for information alert. Accepts SafeHtml | string
    error: for error alert (This can accept default message and optional backend error, if backend response error is passed, this will be used). Accepts Object | Array<SafeHtml | string> | Array<Object> 
    clear: to destroy current open alert but alert disappears based on configured time.
    
  
  NgPopAlert can be used as an:
   
   Overlay: This is best used while the <ng-pop-alert></ng-pop-alert> is reference in a top level component that is always visible throughout the entire state of the angular app. such as usage in app.component and header layout component of your application.
   No Overlay: This is best used if you need to override the overlay approach for a specific component and render it in that current component content.  <ng-pop-alert [overlay]="false"></ng-pop-alert>. you can also choose to use this alert in every component like this but it is not advisable to do so. 
  ````
  
#Sample Usage 
#####(*.ts) 
````
import {Component, OnInit} from '@angular/core';
import {NG_POP_ALERT_CONF} from 'ng-pop-alert';
import {NgPopAlertService} from 'ng-pop-alert';
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
    NG_POP_ALERT_CONF.duration = 5000; // milliseconds
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
      errors: ['Username not filled', 'Email field is empty'], // can be SafeHtml | String | Array<Object> | Array<SafeHtml | String> | Object
      status: 400,
      message: 'Unable to process information'
    };
    this.ngAlertService.error('Error encountered', response['errors']);
  }

  ngOnInit() {
  }
}

  ````
  
  #####(*.html)

  ````
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo"
       src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some test scenario </h2>

<!-- input [overlay] is by default true and you can also customize the behaviour by passing down css rules with input [styles]  -->
<ng-pop-alert></ng-pop-alert>

<ul>
  <li>
    <h2><button type="button" role="button" (click)="success()">Success Alert</button></h2>
  </li>
  <li>
    <h2><button  type="button" role="button" (click)="info()">Info Alert</button></h2>
  </li>
  <li>
    <h2><button  type="button" role="button" (click)="warning()">Warning Alert</button></h2>
  </li>
  <li>
    <h2><button  type="button" role="button" (click)="error()">Error with no error Data Alert</button></h2>
  </li>
  <li>
    <h2><button  type="button" role="button" (click)="errorWithData()">Error with error Data Alert</button></h2>
  </li>
  <li>
    <h2><button  type="button" role="button" (click)="clear()">Clear alert</button></h2>
  </li>
</ul>
````

## Build as a package

`npm run pack-build`


## Publish to npm

`npm publish dist`

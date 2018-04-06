
import {SafeHtml} from "@angular/platform-browser";

export interface Alert {
  visible: boolean;
  message: SafeHtml | string;
  type: string;
  alert_class: string;
}

import {Injectable} from '@angular/core';

@Injectable()
export class ValidationErrorService {

  constructor() {
  }

  /**
   * This is used to compose validation messages
   * @param validationObj
   * @param message
   * @returns {string}
   */
  public message(validationObj, message?: string) {
    let msg = ``;
    if (validationObj && validationObj.constructor === Object) {
      msg = this.processObj(validationObj);
    } else if (validationObj && validationObj.constructor === Array) {
      msg = this.processArray(validationObj);
    }
    return msg;
  }

  private processObj(data) {
    let msg = ``;
    Object.keys(data).forEach((key) => {
      msg += `${data[key]} <br>`;
    });
    return msg;
  }

  private processArray(dataObj) {
    let msg = ``;
    dataObj.forEach((data) => {
      if (data && data.constructor === String) {
        msg += `${data} <br>`;
      } else if (data && data.constructor === Object) {
        msg += this.processObj(data);
      } else if (data && data.constructor === Array) {
        msg += this.processArray(data);
      }
    });
    return msg;
  }

}

const check = require('is_js');

export default class Validator {
  static nonEmptyStringValidation(string:string, error:string) {
    if (string.length === 0) {
      throw new Error(error);
    }
  }
}

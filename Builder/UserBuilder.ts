import User, { AccessLevel, Sex } from '../User';
import { Validator } from '../Validator';
import { IUserBuilder } from './IUserBuilder';

const { v4: uuid4 } = require('uuid');

export default class UserBuilder implements IUserBuilder {
    private user: User;

    constructor() {
      this.reset();
    }

    public reset(): void {
      this.user = new User();
    }

    public setName(name: string) {
      Validator.nonEmptyStringValidation(name, 'Name field is empty');
      this.user.name = name;
      return this;
    }

    public setSurname(surname: string) {
      Validator.nonEmptyStringValidation(surname, 'Surname field is empty');
      this.user.surname = surname;
      return this;
    }

    public setBirthday(birthday: Date) {
      // mm/dd/yyyy
      this.user.birthday = birthday;
      return this;
    }

    public setPassword(password: string) {
      Validator.passwordValidation(password);
      this.user.password = password;
      return this;
    }

    public setSex(sex:Sex) {
      this.user.sex = sex;
      return this;
    }

    public setEmail(email: string) {
      Validator.emailValidation(email);
      this.user.email = email;
      return this;
    }

    public setAccessLevel(accessLevel: AccessLevel) {
      this.user.accessLevel = accessLevel;
      return this;
    }

    public getUser(): User {
      this.user.uuid = uuid4();
      const result = this.user;
      this.reset();
      return result;
    }
}

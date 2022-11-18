import UserBuilder from './UserBuilder';
import User, { AccessLevel, Sex } from '../User';

export default class UserDirector {
private userBuilder: UserBuilder;

public setBuilder(builder: UserBuilder):void {
  this.userBuilder = builder;
}

public buildUser(name:string, surname:string, birthday:Date, email:string, password:string, sex:Sex):User {
  return this.userBuilder.setName(name)
    .setSurname(surname)
    .setAccessLevel(AccessLevel.user)
    .setBirthday(birthday)
    .setEmail(email)
    .setPassword(password)
    .setSex(sex)
    .getUser();
}

public buildAdmin(name:string, surname:string, birthday:Date, email:string, password:string, sex:Sex):User {
  return this.userBuilder.setName(name)
    .setSurname(surname)
    .setAccessLevel(AccessLevel.admin)
    .setBirthday(birthday)
    .setEmail(email)
    .setPassword(password)
    .setSex(sex)
    .getUser();
}
}

import UserDirector from './Builder/UserDirector';
import User from './User';
import UserBuilder from './Builder/UserBuilder';
import AdminPanel from './Panels/AdminPanel';
import UserPanel from './Panels/UserPanel';
import { AccessLevel, Sex } from './Types';

export default class App {
    private director: UserDirector;

    loggedUser:User;

    private adminPanel:AdminPanel

    private userPanel:UserPanel

    constructor() {
      this.director = new UserDirector();
      this.director.setBuilder(new UserBuilder());
      this.adminPanel = new AdminPanel();
      this.userPanel = new UserPanel();
    }

    loggedInUser(user:User):void {
      this.loggedUser = user;
    }

    createAdmin(name:string, surname:string, birthday:Date, email:string, password:string, sex:Sex):void {
      this.isAdmin();
      const admin = this.director.buildAdmin(name, surname, birthday, email, password, sex);
      this.userPanel.addUser(admin);
      this.adminPanel.addAdmin(admin);
    }

    createUser(name:string, surname:string, birthday:Date, email:string, password:string, sex:Sex):void {
      this.isAdmin();
      const user = this.director.buildUser(name, surname, birthday, email, password, sex);
      this.userPanel.addUser(user);
    }

    setAdminAccessLevel(userUUID:string) {
      this.isAdmin();
      if (!this.userPanel.isUserExist(userUUID)) {
        throw new Error(`User with uuid: ${userUUID} already have Admin accessLevel`);
      }
      const user = this.userPanel.getUser(userUUID);
      this.adminPanel.setAdminAccessLevel(user);
    }

    setUserAccessLevel(userUUID:string) {
      this.isAdmin();
      if (this.userPanel.isUserExist(userUUID)) {
        throw new Error(`User with uuid: ${userUUID} already have User accessLevel`);
      }
      const user = this.adminPanel.removeAdmin(userUUID);
      this.userPanel.setUserAccessLevel(user);
    }

    changeUserEmail(userUUID:string, email:string) {
      if (this.loggedUser.getUUID() !== userUUID) {
        this.isAdmin();
      }
      this.userPanel.getUser(userUUID).setEmail(email);
    }

    changeUserPassword(userUUID:string, password:string) {
      if (this.loggedUser.getUUID() !== userUUID) {
        this.isAdmin();
      }
      this.userPanel.getUser(userUUID).setPassword(password);
    }

    private isAdmin():void {
      if (this.loggedUser.getAccessLevel() !== AccessLevel.admin) {
        throw new Error('LoggedUser user has no admin access');
      }
    }
}

import { AccessLevel } from '../Types';
import User from '../User';

export default class UserPanel {
    users: Array<User>;

    constructor() {
      this.users = [];
    }

    addUser(user:User):void {
      this.users.push(user);
    }

    removeUser(user:User) {
      this.users.splice(this.getIndex(user), 1);
    }

    getUser(userUUID:string):User {
      const user = this.users.find(({ uuid }) => uuid === userUUID);
      if (user === undefined) {
        throw new Error('User doesn`t exist');
      }
      return user;
    }

    isUserExist(userUUID: string):boolean {
      return this.users.some(({ uuid }) => uuid === userUUID);
    }

    private getIndex(user:User):number {
      return this.users.findIndex(({ uuid }) => uuid === user.uuid);
    }

    setUserAccessLevel(user:User):void {
      user.setAccessLevel(AccessLevel.user);
      this.addUser(user);
    }
}

import User from '../User';
import { AccessLevel } from '../Types';

export default class AdminPanel {
 private listOfAdmins: Array<User> = [];

 constructor() {
   this.listOfAdmins = [];
 }

 addAdmin(admin: User): void {
   if (this.isAdminExist(admin.uuid)) {
     throw new Error('user is already admin');
   }
   this.listOfAdmins.push(admin);
 }

 setAdminAccessLevel(user:User): void {
   user.setAccessLevel(AccessLevel.admin);
   this.addAdmin(user);
 }

 isAdminExist(adminUUID: string):boolean {
   return this.listOfAdmins.some(({ uuid }) => uuid === adminUUID);
 }

 removeAdmin(uuid:string) {
   const index = this.getIndex(uuid);
   const admin = this.listOfAdmins[index];
   this.listOfAdmins.splice(index, 1);
   return admin;
 }

 getIndex(adminUUID:string):number {
   return this.listOfAdmins.findIndex(({ uuid }) => uuid === adminUUID);
 }
}

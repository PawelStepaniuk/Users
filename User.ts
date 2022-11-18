import { AccessLevel, Sex } from './Types';

export default class User {
 uuid:string

 private name:string;

 private surname:string;

 private birthday:Date;

 private password:string;

 private sex:Sex;

 private email:string;

 private accessLevel:AccessLevel;

 setAccessLevel(accessLevel:AccessLevel) {
   this.accessLevel = accessLevel;
 }

 setEmail(email:string) {
   const pattern = /^[^@]+@\w+(\.\w+)+\w$/;
   const regExp = new RegExp(pattern);
   if (!regExp.test(email)) {
     throw new Error('Wrong email');
   }
   this.email = email;
 }

 setPassword(password:string) {
   const pattern = /(?=.*[!@#$%^&*])(?=.{8,})/;
   const regExp = new RegExp(pattern);
   if (!regExp.test(password)) {
     throw new Error('Password should have one special and 8 charcters ');
   }
   this.password = password;
 }

 getUUID() {
   return this.uuid;
 }

 getAccessLevel() {
   return this.accessLevel;
 }
}

import { AccessLevel, Sex } from '../User';

export interface IUserBuilder {
    setName(name: string): void;

    setSurname(surname: string): void

    setBirthday(birthday: Date): void;

    setPassword(password: string): void

    setSex(sex: Sex): void

    setEmail(email: string): void

    setAccessLevel(accessLevel: AccessLevel)

}

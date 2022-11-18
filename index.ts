import App from './App';
import UserBuilder from './Builder/UserBuilder';
import UserDirector from './Builder/UserDirector';
import { Sex } from './Types';

const builder = new UserBuilder();
const director = new UserDirector();
director.setBuilder(builder);

const app = new App();
app.createUser('pawel', 'stepaniuk', new Date(), 'a@a.pl', '123456as@', Sex.male);

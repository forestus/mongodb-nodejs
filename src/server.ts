import express from 'express';
import mongooseService from './database/index';
import { User } from './schema/user';
const app = express();
app.use(mongooseService.connectWithRetry);
(async () => {
  const user = await User.create({
    _id: '1',
    email: 'gm@hotmail.com',
    password: '123',
    firstName: 'forestus',
    lastName: 'gankstar'
  });
  console.log(user);
})();

app.listen(3000, () => {
  console.log('server on!');
});

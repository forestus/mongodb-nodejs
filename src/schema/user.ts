import mongooseService from '../database/index';
let Schema = mongooseService.getMongoose().Schema;

let userSchema = new Schema(
  {
    _id: String,
    email: String,
    password: { type: String, select: false },
    firstName: String,
    lastName: String,
    permissionFlags: Number
  },
  { id: false }
);

let User = mongooseService.getMongoose().model('Users', userSchema);
export { User };

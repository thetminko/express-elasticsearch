import { Gender } from '../constants';
import EsUser from '../indexes/EsUser';

// this could be an db entity
class User {

  id: string;

  firstName: string;

  lastName: string;

  gender: Gender

  address: string;

  constructor(id: string, firstName: string, lastName: string, gender: Gender, address: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
  }

  getIndice() {
    return new EsUser(this);
  }

}

export default User;

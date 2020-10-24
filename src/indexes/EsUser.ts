import { Gender } from '../constants';

class EsUser {

  id: string;

  firstName: string;

  lastName: string;

  fullName: string;

  gender: Gender;

  address: string;

  constructor({ id, firstName, lastName, gender, address }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName } ${ lastName}`;
    this.gender = gender;
    this.address = address;
  }

}

export default EsUser;

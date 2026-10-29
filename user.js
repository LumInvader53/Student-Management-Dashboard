export default class User {
  constructor(firstName, lastName, email) {
    this.id = Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

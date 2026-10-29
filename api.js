import User from "./user.js";

const mockStudentDb = [];
mockStudentDb.push(new User("Jamel", "Hadjirasul", "jamel@email.com"));
mockStudentDb.push(new User("Karl", "Gaitera", "karl@email.com"));

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = new User(
    newStudentData.firstName,
    newStudentData.lastName,
    newStudentData.email,
  );

  mockStudentDb.push(savedStudent);

  return savedStudent;
}

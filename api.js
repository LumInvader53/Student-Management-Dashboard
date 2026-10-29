import User from "./user.js";

const mockStudentDb = [];

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

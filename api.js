import User from "./user.js";

const mockStudentDb = [];

/**
 * Getter for getting the lists of users in the database.
 *
 * @returns Returns the array of students from the DB.
 */
export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Function for adding User from parameter to the database.
 *
 * @param {Array} newStudentData User data to be added to the database.
 * @returns Returns the added user.
 */
export function addStudentsAPI(newStudentData) {
  const savedStudent = new User(
    newStudentData.firstName,
    newStudentData.lastName,
    newStudentData.email,
  );

  mockStudentDb.push(savedStudent);

  return savedStudent;
}

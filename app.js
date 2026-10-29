import { getStudentsAPI, addStudentsAPI } from "./api.js";

const localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

const renderTable = (dataArray) => {
  studentTableBody.innerHTML = "";

  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No student records found.</td>
      </tr>
    `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.email}</td>
    `;

    studentTableBody.appendChild(row);
  });
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = studentForm.firstName.value.trim();
  const lastName = studentForm.lastName.value.trim();
  const email = studentForm.email.value.trim();

  if (!firstName || !lastName || !email) {
    alert("Please fill out all input fields!");
    return;
  }

  const studentData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  localStudents.push(addStudentsAPI(studentData));
  renderTable(localStudents);
  studentForm.reset();
  studentForm.firstName.focus();
});

const initApp = () => {
  localStudents.push(...getStudentsAPI());
  console.log(localStudents);
  renderTable(localStudents);
};

initApp();

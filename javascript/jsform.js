// Function to validate Firstname and Lastname
function validateName() {
  const nameInput = document.getElementById("name");
  const names = nameInput.value.trim().split(" ");
  const errorElement = document.getElementById("nameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate Student ID
function validateStudentID() {
  const stdInput = document.getElementById("std");
  const stdPattern = /^\d{10}$/;
  const errorElement = document.getElementById("stdError");

  if (!stdPattern.test(stdInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate University Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^.+@dome\.tu\.ac\.th$/;
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent =
      "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validatework() {
  const workInput = document.getElementById("work");
  const title = workInput.value.trim();
  const errorElement = document.getElementById("workError");

  if (!title || title[0] !== title[0].toUpperCase()) {
    errorElement.textContent = "Please enter your first letter with Uppercase.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validatelocation(){
  const locationInput = document.getElementById("location");
  const locationcheck = locationInput.value.trim();
  const errorElement = document.getElementById("locationError");

  if (!locationcheck || !locationcheck.includes(",")) {
    errorElement.textContent = "Please enter a location in the format 'location,province'";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function resetForm() {
  form.reset(); // Assuming form is the reference to your form element
  displayDiv.innerHTML = ""; // Clear the displayed data
  document.getElementById("confirmationMessage").style.display = "none";
}

    // JavaScript เพื่อจัดการการส่งฟอร์มและแสดงข้อมูล
    const form = document.getElementById('myForm');
    const displayDiv = document.getElementById('displayData');

    // ดึงข้อมูลทั้งหมดจาก localStorage
    let allData = JSON.parse(localStorage.getItem('allFormData')) || [];

    // แสดงข้อมูลทั้งหมด
    displayData();

    form.addEventListener('submit', function(event){
      event.preventDefault();// ป้องกันการโหลดหน้าใหม่เมื่อกด submit

      const isNameValid = validateName;
      const isStudentIDValid = validateStudentID;
      const isEmailValid = validateEmail;
      const isworktitleValid = validatework;
      const islocationValid = validatelocation;

  // ตรวจสอบว่าข้อมูลถูกต้องทั้งหมดหรือไม่
  if (isNameValid() && isStudentIDValid() && isEmailValid() && isworktitleValid() && islocationValid()) {
      // ดึงค่าจากฟอร์ม
      const name = document.getElementById('name').value;
      const std = document.getElementById('std').value;
      const email = document.getElementById('email').value;
      const work = document.getElementById('work').value;
      const activity = document.getElementById('activity').value;
      const academic = document.getElementById('academic').value;
      const semester = document.getElementById('semester').value;
      const sd = document.getElementById('sd').value;
      const ed = document.getElementById('ed').value;
      const location = document.getElementById('location').value;
      const description = document.getElementById('description').value;

      // บันทึกข้อมูลลงในอาร์เรย์
      const formData = { name, std, email, work, activity, academic, semester, sd, ed, location, description };
      allData.push(formData);

      // บันทึกข้อมูลทั้งหมดลงใน localStorage
      localStorage.setItem('allFormData', JSON.stringify(allData));

      // แสดงข้อมูลทั้งหมด
      document.getElementById("confirmationMessage").style.display = "block";
      displayData();
    }
    });

    // จัดการกรณีรีเฟรชหน้า
    window.addEventListener('beforeunload', function() {
      // ล้างข้อมูลที่ถูกบันทึกเมื่อรีเฟรช
      localStorage.removeItem('allFormData');
    });

    function displayData() {
      // แสดงข้อมูลทั้งหมด
      displayDiv.innerHTML = '<p></p>';

      allData.forEach((data , index) => {
        displayDiv.innerHTML += `
          <br>
          <h2>Our Activity ; ${index + 1}</h2>
          <br>
          <p>Name: ${data.name}
          <br>
          <br>StudentID: ${data.std}
          <br>
          <br>Email: ${data.email}
          <br>
          <br>Work: ${data.work}
          <br>
          <br>Activity: ${data.activity}
          <br>
          <br>Academic: ${data.academic}
          <br>
          <br>Semester: ${data.semester}
          <br>
          <br>Start Date: ${data.sd}
          <br>
          <br>End Date: ${data.ed}
          <br>
          <br>Location: ${data.location}
          <br>
          <br>Description: ${data.description}</p>
        `;
      });
    }
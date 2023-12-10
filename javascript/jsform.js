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

    // JavaScript เพื่อจัดการการส่งฟอร์มและแสดงข้อมูล
    const form = document.getElementById('myForm');
    const displayDiv = document.getElementById('displayData');

    // ดึงข้อมูลทั้งหมดจาก localStorage
    let allData = JSON.parse(localStorage.getItem('allFormData')) || [];

    // แสดงข้อมูลทั้งหมด
    displayData();

    form.addEventListener('submit', function(event) 
    {
      event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อกด submit

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
      displayData();
    });

    // จัดการกรณีรีเฟรชหน้า
    window.addEventListener('beforeunload', function() {
      // ล้างข้อมูลที่ถูกบันทึกเมื่อรีเฟรช
      localStorage.removeItem('allFormData');
    });

    function displayData() {
      // แสดงข้อมูลทั้งหมด
      displayDiv.innerHTML = '<p></p>';

      allData.forEach((data) => {
        displayDiv.innerHTML += `
          <p>Name: ${data.name}</p>
          <p>StudentID: ${data.std}</p>
          <p>Email: ${data.email}</p>
          <p>Work: ${data.work}</p>
          <p>Activity: ${data.activity}</p>
          <p>Academic: ${data.academic}</p>
          <p>Semester: ${data.semester}</p>
          <p>Start Date: ${data.sd}</p>
          <p>End Date: ${data.ed}</p>
          <p>Location: ${data.location}</p>
          <p>Description: ${data.description}</p>
        `;
      });
    }

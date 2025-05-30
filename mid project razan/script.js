// User DTO class
class User {
  constructor(email, name, phone, gender, address) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}

const users = [];

// Tab switch logic
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// Form validation and submission
document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert('Invalid email');
  if (!/^[a-zA-Z ]+$/.test(name)) return alert('Invalid name');
  if (!/^\d{10,}$/.test(phone)) return alert('Invalid phone number');
  if (!gender) return alert('Please select gender');
  if (!address) return alert('Address cannot be empty');

  const user = new User(email, name, phone, gender, address);
  users.push(user);

  document.getElementById('user-form').reset();
  document.getElementById('success-message').textContent = 'User added successfully!';

  setTimeout(() => {
    document.getElementById('success-message').textContent = '';
  }, 3000);

  renderUsers();
});

// View toggle and rendering
let isTableView = true;

document.getElementById('toggle-view').addEventListener('click', () => {
  isTableView = !isTableView;
  document.getElementById('toggle-view').textContent = isTableView ? 'Switch to Card View' : 'Switch to Table View';
  renderUsers();
});

function renderUsers() {
  const container = document.getElementById('users-container');
  const tableBody = document.getElementById('users-table-body');
  
  tableBody.innerHTML = ''; // Clear previous rows

  if (isTableView) {
    container.className = 'table-view';

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>
      `;
      tableBody.appendChild(row);
    });

  } else {
    container.className = 'card-view';
    container.innerHTML = ''; // Remove table if switching to card view

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Address:</strong> ${user.address}</p>
      `;
      container.appendChild(card);
    });
  }
}


document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();

  // Error fields
  const emailError = document.getElementById("email-error");
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const genderError = document.getElementById("gender-error");
  const addressError = document.getElementById("address-error");
  const successMessage = document.getElementById("success-message");

  // Clear previous messages
  emailError.textContent = "";
  nameError.textContent = "";
  phoneError.textContent = "";
  genderError.textContent = "";
  addressError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Name validation
  if (!/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Name must contain only letters and not be empty.";
    isValid = false;
  }

  // Phone validation
  if (!/^\d{10,}$/.test(phone)) {
    phoneError.textContent = "Phone number must be at least 10 digits and contain only numbers.";
    isValid = false;
  }

  // Gender validation
  if (!gender) {
    genderError.textContent = "Please select a gender.";
    isValid = false;
  }

  // Address validation
  if (!address) {
    addressError.textContent = "Address cannot be empty.";
    isValid = false;
  }

  // If all is valid
  if (isValid) {
    successMessage.style.color = "green";
    successMessage.textContent = "User added successfully!";
    this.reset();
    // You can add your logic here to add the user to the list
  }
});


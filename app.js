
const registeredUsers = [];
let currentUser = null; 


function register() {
  const username = document.getElementById('reg-username').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  
  const isEmailRegistered = registeredUsers.some(user => user.email === email);

  
  if (isEmailRegistered) {
    alert('This email is already registered. Please use a different email.');
  } else if (username && email && password) {
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
    } else {
      
      registeredUsers.push({ username, email, password, balance: 0 });

     
      document.getElementById('reg-username').value = '';
      document.getElementById('reg-email').value = '';
      document.getElementById('reg-password').value = '';

      alert('Registration successful!');
    }
  } else {
    alert('Please fill in all fields.');
  }
}


function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  
  const user = registeredUsers.find(user => user.email === email && user.password === password);

  if (user) {
    alert(`Welcome, ${user.username}!`);

    
    currentUser = user;

    
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
    displayUserProfile(user);

    
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
  } else {
    alert('Invalid email or password. Please try again.');
  }
}


function displayUserProfile(user) {
  document.getElementById('user-profile').innerText = `Username: ${user.username}\nEmail: ${user.email}\nBalance: $${user.balance.toFixed(2)}`;
}


function deposit() {
  const amount = parseFloat(document.getElementById('deposit-amount').value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (currentUser) {
    currentUser.balance += amount;
    alert(`$${amount.toFixed(2)} deposited successfully.`);
    displayUserProfile(currentUser);
    document.getElementById('deposit-amount').value = ''; 
  } else {
    alert('User not logged in.');
  }
}


function withdraw() {
  const amount = parseFloat(document.getElementById('withdraw-amount').value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (currentUser) {
    if (currentUser.balance >= amount) {
      currentUser.balance -= amount;
      alert(`$${amount.toFixed(2)} withdrawn successfully.`);
      displayUserProfile(currentUser);
      document.getElementById('withdraw-amount').value = ''; 
    } else {
      alert('Insufficient balance.');
    }
  } else {
    alert('User not logged in.');
  }
}

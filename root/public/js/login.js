const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('you suck');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('clicked')

  const username = document.querySelector('#username-signup').value.trim();
  console.log("🚀 ~ file: login.js:27 ~ signupFormHandler ~ username", username)
  const password = document.querySelector('#password-signup').value.trim();
  console.log("🚀 ~ file: login.js:28 ~ signupFormHandler ~ password", password)

  if (username && password) {
    const response = await fetch('/api/user/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('yousuck');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// UserJS By iCorp
console.log("UserJS By iCorp Pvt has successfully booted");
console.log("Now running...");

// Globally initialize variables
let username, tokens, key, password, email, name;

// Function to get cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

// Attempt to fetch the "account" cookie
const accountCookie = getCookie('account');

if (accountCookie) {
  // Parse the JSON contents of the cookie
  let accountData;
  try {
    accountData = JSON.parse(accountCookie);

    // Assign values to the globally initialized variables
    username = accountData.username;
    tokens = accountData.tokens;
    key = accountData.key;
    password = accountData.password;
    email = accountData.email;
    name = accountData.name;

      // Logging variables
    console.log('Username:', username);
    console.log('Tokens:', tokens);
    console.log('Key:', key);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Name:', name);
  } catch (error) {
    console.error('Error parsing account cookie:', error);
  }
} else {
  console.log('Not logged in');
}
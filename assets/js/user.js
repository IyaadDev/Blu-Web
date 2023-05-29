// UserJS By iCorp
console.log("UserJS By iCorp Pvt has successfully booted");
console.log("Now running...");

// Globally initialize variables
let username = null;
let tokens = null;
let key = null;
let password = null;
let email = null;
let name = null;
let pfp = null;

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
    pfp = accountData.pfp;

    // Logging variables
    console.log('Username:', username);
    console.log('Tokens:', tokens);
    console.log('Key:', key);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Name:', name);
      console.log('PFP:', pfp);
  } catch (error) {
    console.error('Error parsing account cookie:', error);
  }
} else {
  console.log('Not logged in');
}

// Now all the variables are accessible outside the if block
console.log('Username outside if block:', username);
console.log('Tokens outside if block:', tokens);
console.log('Key outside if block:', key);
console.log('Password outside if block:', password);
console.log('Email outside if block:', email);
console.log('Name outside if block:', name);
console.log('PFP outside if block:', pfp);

const validate = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  return check(username, password, onvalid);
};

const check = (username, password, callback) => {
  if (username == "admin" && password == "12345") {
    return callback();
  } else {
    alert("Invalid Username or password.");
    return false;
  }
};

const onvalid = () => true;

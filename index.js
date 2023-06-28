
// sighn in validate password in sighn in 
var pass1;
function getpass(inp2) {
  pass1 = inp2.value;
}
function validatePassword(pass) {
  if (pass.value != pass1) {
    document.getElementById("invalidpass").style.color = "red";
    var msg2 = (document.getElementById("invalidpass").innerHTML =
      "password  and  repeat  password  should  be  the same");
  } else {
    var msg = (document.getElementById("invalidpass").innerHTML = "");
    pass.style.backgroundColor = "white";
  }
}

// check if user exists or not //login page 
//getname input

var users
var xhr = new XMLHttpRequest();
  xhr.open("Get", "https://fakestoreapi.com/users");
  xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4) {
      users = JSON.parse(xhr.response);
  }
})
var uName;
function getname(name) {
  uName = name.value;
}
//get pass input
var uPassword
function getpassword(password){
  uPassword = password.value;
}

var msg;

function serchForUser(e) {
  var check = false;
  for (var user of users) {
    if (uName == user.username && uPassword == user.password) {
      e.preventDefault();
      sessionStorage.setItem("userName", uName);
      sessionStorage.setItem("userEmail", user.email);
      open("account.html");
      check = true;
      break;
    }
  }

  if (check == false) {
    e.preventDefault();
  msg = document.getElementById("paw").innerHTML =" *User Name Or Password is incorrect";
  }
}




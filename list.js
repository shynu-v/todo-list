window.addEventListener("load", load);
var disabled = 0;
function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);

      var list = "";
      for (let i = 0; i < response.length; i++) {
        if (response[i].completed === true) {
          list += `<li class="list-group-item d-flex justify-content-between align-items-center"><input  type="checkbox" checked disabled><label  class="strikethrough" >${response[i].title}</label></li>`;
          disabled += 1;
        } else {
          list += `<li class="list-group-item d-flex justify-content-between align-items-center"><input  type="checkbox" onchange="check()"><label  class="strikethrough" >${response[i].title}</label></li>`;
        }
      }
      document.getElementById("list").innerHTML = list;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
var checked;
function check() {
  let promise = new Promise(function (resolve, reject) {
    let checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked '
    );

    checked = checkboxes.length - disabled;
    if (checked % 5 == 0 && checked !=0) {
      resolve(checked);
    }
  });
  promise.then(function () {
    setTimeout(function (a = checked) {
      alert(a+" Tasks have been Successfully Completed ");
    }, 100);
  });
}

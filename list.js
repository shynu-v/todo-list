window.addEventListener("load", load);
var disabled = 0;
var ull = document.getElementById("list");
function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      for (let i = 0; i < response.length; i++) {
        const list = document.createElement("li");
        list.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onchange", "check()");
        const close = document.createElement("button");
        close.classList.add("closebtn");
        close.setAttribute("onclick", "deldata(this)");
        const del = document.createElement("li");
        del.classList.add("fas", "fa-times");
        close.append(del);
        const label = document.createElement("label");
        label.classList.add("strikethrough");
        if (response[i].completed === true) {
          label.innerHTML = response[i].title;
          checkbox.setAttribute("disabled", "true");
          checkbox.setAttribute("checked", "true");
          disabled += 1;
        } else {
          label.innerHTML = response[i].title;
        }
        list.append(checkbox);
        list.append(label);
        list.append(close);
        ull.append(list);
      }
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
    if (checked % 5 == 0 && checked != 0) {
      resolve(checked);
    }
  });
  promise.then(function () {
    setTimeout(function (a = checked) {
      alert(a + " Tasks have been Successfully Completed ");
    }, 100);
  });
}

const adddata = () => {
  let values = document.getElementById("textvalue");
  const list = document.createElement("li");
  list.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  if(values.value == "" || values.value == null){
    alert("Task connot be empty");
  }else{
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onchange", "check()");
    const close = document.createElement("button");
    close.classList.add("closebtn");
    close.setAttribute("onclick", "deldata(this)");
    const del = document.createElement("li");
    del.classList.add("fas", "fa-times");
    close.append(del);
    const label = document.createElement("label");
    label.classList.add("strikethrough");
    label.innerHTML = values.value;
    list.append(checkbox);
    list.append(label);
    list.append(close);
    ull.prepend(list);
    values.value = "";
  } 
};

const deldata = (a) =>{
  let lis = a.parentNode;
  a.parentNode.parentNode.removeChild(lis);
}